import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";
import EnumEspecie from "../enum/EnumEspecie";
import PetRepository from "../repositories/interfaces/PetRepository";
import PetEntity from "../entities/PetEntity";
let listaDePets: Array<TipoPet> = [];

let id = 0;
function geraId() {
    id = id + 1;
    return id;
}

export default class PetController {
    constructor(private repository: PetRepository) { }
    criaPet(req: Request, res: Response) {
        const { nome, especie, adotado, dataDeNascimento } = <PetEntity>req.body;
        if (!Object.values(EnumEspecie).includes(especie)) {
            return res.status(400).json({ eror: "Especie inválida" });
        }

        const novoPet = new PetEntity();
        novoPet.id = geraId(),
            (novoPet.adotado = adotado);
        (novoPet.especie = especie);
        (novoPet.nome = nome);
        (novoPet.dataDeNascimento = dataDeNascimento);
        this.repository.criaPet(novoPet);
        return res.status(201).json(novoPet);
    }
    async listaPet(req: Request, res: Response) {
       const listaDePets = await this.repository.listaPet();
       return res.status(200).json(listaDePets);
    }

    atualizarPet(req: Request, res: Response) {
        const { id } = req.params;
        const { adotado, especie, dataDeNascimento, nome } = req.body as TipoPet;
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if (!pet) {
            return res.status(404).json({ erro: "Pet não encontrado" })
        }

        pet.nome = nome;
        pet.dataDeNascimento = dataDeNascimento;
        pet.especie = especie;
        pet.adotado = adotado;
        return res.status(200).json(pet);
    }

    deletaPet(req: Request, res: Response) {
        const { id } = req.params;
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if (!pet) {
            return res.status(400).json({ erro: "Pet não encontrado" });
        }
        const indice = listaDePets.indexOf(pet);
        listaDePets.splice(indice, 1);
        return res.status(200).json();
    }
}