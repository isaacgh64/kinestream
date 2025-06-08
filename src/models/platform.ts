export default class Platform {
    providerId: number
    providerName: string
    logoPath: string
    displayPriority:number

    constructor(
        provierId: number,
        providerName: string,
        logoPath:string,
        displayPriority:number
    ) {
        this.providerId = provierId
        this.providerName = providerName
        this.logoPath= logoPath
        this.displayPriority = displayPriority
    }

    static fromJson(json: any): Platform {
        return new Platform(
            json.provider_id,
            json.provider_name,
            json.logo_path,
            json.display_priority
        );
    }

    toJson(): any {
        return {
            provider_id: this.providerId,
            provider_name: this.providerName,
            logo_path:this.logoPath
        };
    }
}