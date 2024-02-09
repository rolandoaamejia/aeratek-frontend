//Home section
export interface Service {
  idServices?: number;
  date?: string;
  title?: string;
  titulo?: string;
  body?: string;
  cuerpo?: string;
  coverImage: string;
  Images?: number[];
}

//Modal Section
export interface ServiceInfoDetail {
  service_title?: string;
  service_titulo?: string;
  service_body?: string;
  service_cuerpo?: string;
  image_urls?: string[];
}
