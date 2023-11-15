import { Colaborador } from "../../user/model/colaborador.model";

export class Login extends Colaborador{
    public user?: string;
    public password?: string;

    static fromJson(jsonData: any): Login {
        return Object.assign(new Login(), jsonData);
    }

}

