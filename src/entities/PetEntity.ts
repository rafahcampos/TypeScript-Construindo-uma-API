import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";

//Vai entender que tudo que está aqui vai ser mapeado para o banco de dados como se fosse uma tabela

@Entity()
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id!: number;  //" ! " indica que este campo será inicializado no futuro
    @Column()
    nome: string;
    @Column()
    especie: EnumEspecie;
    @Column()
    dataDeNascimento: Date;
    @Column()
    adotado: boolean;

    constructor(nome: string, especie: EnumEspecie, dataDeNascimento: Date, adotado: boolean) {
        this.nome = nome;
        this.especie = especie;
        this.dataDeNascimento = dataDeNascimento;
        this.adotado = adotado;
    }
}