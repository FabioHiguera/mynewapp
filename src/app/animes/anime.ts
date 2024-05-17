export class Anime {
    id: number;
    name: string;
    description: string;
    rating: string;
    episode: number;
    categorie: string;
    studio: string;
    img: string;
  
    constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.rating = data.rating;
      this.episode = data.episode;
      this.categorie = data.categorie;
      this.studio = data.studio;
      this.img = data.img;
    }
  }
  
