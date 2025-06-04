import Genres from './genres';
export default class Film {
    id: number
    title: string
    posterPath: string
    originalTitle: string
    backdropPath: string
    overview: string
    releaseDate: string
    genres:Genres[]

    constructor(
        id: number,
        title: string,
        posterPath: string,
        originalTitle: string,
        backdropPath: string,
        overview: string,
        releaseDate: string,
        genres:Genres[]
    ) {
        this.id = id
        this.title = title
        this.posterPath = posterPath
        this.originalTitle = originalTitle
        this.backdropPath = backdropPath
        this.overview = overview
        this.releaseDate = releaseDate
        this.genres = genres
    }

    static fromJson(json: any): Film {
        return new Film(
            json.id,
            json.title,
            json.poster_path,
            json.original_title,
            json.backdrop_path,
            json.overview,
            json.release_date,
            json.genres.map((genre: any) => Genres.fromJson(genre))
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
            release_date: this.releaseDate,
            genres: this.genres.map(g => g.toJson())
        };
    }
}