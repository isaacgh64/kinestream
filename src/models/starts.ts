export default class Starts {
    id: number
    name: string
    profilePath: string

    constructor(
        id: number,
        name: string,
        profilePath: string,
    ) {
        this.id = id
        this.name = name
        this.profilePath = profilePath
    }

    static fromJson(json: any): Starts {
        return new Starts(
            json.id,
            json.name,
            json.profile_path,
            
        );
    }

    toJson(): any {
        return {
            id: this.id,
            title: this.name,
            profile_path: this.profilePath,
        };
    }
}