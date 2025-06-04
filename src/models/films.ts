export default class Films {
    id: number;
    title: string;
    posterPath: string;
    originalTitle: string;
    backdropPath: string;
    overview: string;
    releaseDate: string;

    constructor(
        id: number,
        title: string,
        posterPath: string,
        originalTitle: string,
        backdropPath: string,
        overview: string,
        releaseDate: string
    ) {
        this.id = id;
        this.title = title;
        this.posterPath = posterPath;
        this.originalTitle = originalTitle;
        this.backdropPath = backdropPath;
        this.overview = overview;
        this.releaseDate = releaseDate;
    }

    static fromJson(json: any): Films {
        return new Films(
            json.id,
            json.title,
            json.poster_path,
            json.original_title,
            json.backdrop_path,
            json.overview,
            json.release_date
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
            release_date: this.releaseDate
        };
    }
}