import { Request, Response } from "express";
import type TipoPet from "../tipos/tipoPet";

let listaDePets: Array<TipoPet> = [];

export default class PetController {
    criaPet(req: Request, res: Response) {
        const { id, nome, especie, adotado, idade } = <TipoPet>req.body;
        const novoPet: TipoPet = { id, nome, especie, adotado, idade }
        listaDePets.push(novoPet);
        return res.status(201).json(novoPet);
    }
}