import Genres from "./genres"
import Season from "./seasons"

export default class TV {
    id: number
    title: string
    posterPath: string
    originalTitle: string
    backdropPath: string
    overview: string
    genres:Genres[]
    releaseDate: string
    seasons:Season[]

    constructor(
        id: number,
        title: string,
        posterPath: string,
        originalTitle: string,
        backdropPath: string,
        overview: string,
        genres: Genres[],
        releaseDate: string,
        seasons:Season[]
        
    ) {
        this.id = id
        this.title = title
        this.posterPath = posterPath
        this.originalTitle = originalTitle
        this.backdropPath = backdropPath
        this.overview = overview
        this.genres = genres
        this.releaseDate = releaseDate
        this.seasons=seasons
    }

    static fromJson(json: any): TV {
        return new TV(
            json.id,
            json.name,
            json.poster_path,
            json.original_name,
            json.backdrop_path,
            json.overview,
            json.genres,
            json.release_date,
            json.seasons
        );
    }

    toJson(): any {
        return {
            id: this.id,
            title: this.title,
            poster_path: this.posterPath,
            original_title: this.originalTitle,
            backdrop_path: this.backdropPath,
            overview: this.overview,
        };
    }
}