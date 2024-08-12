import { Repository } from "typeorm";
import PetEntity from "../../entities/PetEntity";
import InterfacePetRepository from "./InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository{
    private respository:Repository<PetEntity>

    criaPet(pet: PetEntity): void {
        this.respository.save(pet);
    }
    listaPet(): Array<PetEntity> {
        throw new Error("Method not implemented.");
    }
    atualizaPet(id: number, pet: PetEntity): void {
        throw new Error("Method not implemented.");
    }
    deletaPet(id: number, pet: PetEntity): void {
        throw new Error("Method not implemented.");
    }

}