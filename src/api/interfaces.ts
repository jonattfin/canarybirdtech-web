export interface IProject {
  title: string;
  webUrl: string;
  imageUrl: string;
  summaryText: string;

  frontend: IProjectSettings;
  backend: IProjectSettings;
}

export interface IProjectSettings {
  webUrl: string;
  githubUrl: string;

  sonarUrl: string;
  sonarImageUrl: string;
  technologies: string[];
}
