import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";

//Vai entender que tudo que está aqui vai ser mapeado para o banco de dados como se fosse uma tabela

@Entity()
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    especie: EnumEspecie;
    @Column()
    dataDeNascimento: Date;
    @Column()
    adotado: boolean;
}