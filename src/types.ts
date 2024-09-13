export interface Participante {
    id: number;
    nome: string;
    rm: string;
    github: string;
    redesSociais: {
      instagram: string;
      linkedin: string;
    };
    foto: string;
  }