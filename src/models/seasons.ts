export default class Season {
  id: number
  name: string
  overview: string
  airDate: string
  episodeCount: number
  posterPath: string
  seasonNumber: number
  voteAverage: number

  constructor(
    id: number,
    name: string,
    overview: string,
    airDate: string,
    episodeCount: number,
    posterPath: string,
    seasonNumber: number,
    voteAverage: number
  ) {
    this.id = id;
    this.name = name;
    this.overview = overview;
    this.airDate = airDate;
    this.episodeCount = episodeCount;
    this.posterPath = posterPath;
    this.seasonNumber = seasonNumber;
    this.voteAverage = voteAverage;
  }

  static fromJson(json: any): Season {
    return new Season(
      json.id,
      json.name,
      json.overview,
      json.air_date,
      json.episode_count,
      json.poster_path,
      json.season_number,
      json.vote_average
    );
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      overview: this.overview,
      air_date: this.airDate,
      episode_count: this.episodeCount,
      poster_path: this.posterPath,
      season_number: this.seasonNumber,
      vote_average: this.voteAverage
    };
  }
}
