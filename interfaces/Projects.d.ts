//Home Section
export interface Project {
  idProjects?: number;
  date?: string;
  date_project?: string;
  title?: string;
  titulo?: string;
  body?: string;
  cuerpo?: string;
  coverImage: string;
  Images?: number[];
}

//Modal Section
export interface ProjectInfoDetail {
  project_title?: string;
  project_titulo?: string;
  project_body?: string;
  project_cuerpo?: string;
  image_urls?: string[];
}
