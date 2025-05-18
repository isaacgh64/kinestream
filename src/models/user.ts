
export default class User{
    name: string;
    mail: string;

    constructor(name: string, mail: string) {
        this.name = name;
        this.mail = mail;
    }
    static fromJson(json: any): User {
        return new User(
            json.name,
            json.mail
        );
    }
    toJson(): any {
        return {
            name: this.name,
            mail: this.mail,
        };
    }
}

