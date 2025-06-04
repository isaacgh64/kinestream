export default class Genres {
    id: number;
    name: string;

    constructor(
        id: number,
        name: string,
    ) {
        this.id = id
        this.name = name 
    }

    static fromJson(json: any): Genres {
        return new Genres(
            json.id,
            json.name,
        );
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.name,
        };
    }
}