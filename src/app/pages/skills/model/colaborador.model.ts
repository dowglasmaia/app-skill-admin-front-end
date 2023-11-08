import { Skill } from "./skill.model";

export class Colaborador {
    id?: number;
    name?: string;
    email?: string;
    matricula?: string;
    cargo?: string;
    squard?: string;
    skills?: Skill[] = [];
}