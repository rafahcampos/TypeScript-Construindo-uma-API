import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";
import AdotanteEntity from "./AdotanteEntity";
import EnumPorte from "../enum/EnumPorte";

//Vai entender que tudo que está aqui vai ser mapeado para o banco de dados como se fosse uma tabela

@Entity()
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id!: number;  //" ! " indica que este campo será inicializado no futuro
    @Column()
    nome: string;
    @Column()
    especie: EnumEspecie;
    @Column({ nullable: true })
    porte?: EnumPorte;
    @Column()
    dataDeNascimento: Date;
    @Column()
    adotado: boolean;
    @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets)
    adotante!: AdotanteEntity;

    constructor(
        nome: string,
        especie: EnumEspecie,
        dataDeNascimento: Date,
        adotado: boolean,
        porte?: EnumPorte
    ) {
        this.nome = nome;
        this.especie = especie;
        this.porte = porte;
        this.dataDeNascimento = dataDeNascimento;
        this.adotado = adotado;
    }
}