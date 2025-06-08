import Genres from "./genres"
import Season from "./seasons"

export default class TVDetail {
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

    static fromJson(json: any): TVDetail {
        return new TVDetail(
            json.id,
            json.name,
            json.poster_path,
            json.original_name,
            json.backdrop_path,
            json.overview,
            json.genres.map((genre: any) => Genres.fromJson(genre)),
            json.release_date,
            json.seasons.map((seasons: any) => Season.fromJson(seasons)),
        );
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.title,
            poster_path: this.posterPath,
            original_title: this.originalTitle,
            backdrop_path: this.backdropPath,
            overview: this.overview,
        };
    }
}