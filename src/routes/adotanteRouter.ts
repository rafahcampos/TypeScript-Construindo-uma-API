import express, { Router } from "express";
import AdotanteController from "../controller/AdotanteController"
import AdotanteRepository from "../repositories/interfaces/AdotanteRepository";
import {AppDataSource} from "../config/dataSource";
import AdotanteRepository from "../repositories/interfaces/AdotanteRepository";

const router = express.Router();
const AdotanteRepository = new AdotanteRepository(
    AppDataSource.getRepository("AdotanteEntity")
);
const AdotanteController = new AdotanteController (adotanteRepository);

router.post("/", (req,res)=> AdotanteController.criaAdotante(req,res));

export default router;