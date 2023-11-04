export class Login {
    public user?: string;
    public password?: string;

    static fromJson(jsonData: any): Login {
        return Object.assign(new Login(), jsonData);
    }
}