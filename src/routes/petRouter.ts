import express, { Router } from "express";
import PetController from "../controller/PetController";

const router = express.Router();

const petController = new PetController();

router.post("/", petController.criaPet);
router.get("/", petController.listaPet);
router.put("/:id", petController.atualizarPet);
router.delete("/:id", petController.deletaPet);

export default router;