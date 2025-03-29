export interface Game {
    id: number;
    title: string;
    short_description: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string; 
    description:string;
    thumbnail: string;
    game_url: string;
    freetogame_profile_url: string;
    screenshots: Screenshot[];
    minimum_system_requirements: Minimum
  }
  export type Screenshot = {
    id: number;
    image: string; // Тут масив об'єктів з image
  };
  export type Minimum = {
    graphics:string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
  }
  