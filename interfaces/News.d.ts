//Home section
export interface News {
  idNews?: number;
  date?: string;
  title?: string;
  titulo?: string;
  body?: string;
  cuerpo?: string;
  coverImage: string;
  Images?: number[];
}

//Modal Section
export interface NewsInfoDetail {
  news_title?: string;
  news_titulo?: string;
  news_body?: string;
  news_cuerpo?: string;
  image_urls: string[];
}
