import AdotanteEntity from "../entities/AdotanteEntity";
import { Request, Response } from "express";


export default class AdotanteController {
    constructor(private repository: AdotanteController) { }
    async criaPet(req: Request, res: Response) {
        const { nome, senha, celular, foto, endereco } = <AdotanteEntity>req.body;


    }

    async criaAdotante(req: Request, res: Response) {
        try {
            const { nome, senha, celular, foto, endereco } = <AdotanteEntity>req.body;

            const novoAdotante = new AdotanteEntity(
                nome,
                senha,
                celular,
                foto,
                endereco
            );
            await this.repository.criaAdotante(novoAdotante);
            return res.status(201).json(novoAdotante);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar o adotante" });
        }
    }
};