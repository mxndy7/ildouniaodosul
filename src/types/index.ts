export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface Diferencial {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

export interface Depoimento {
  id: string;
  nome: string;
  empresa: string;
  texto: string;
  foto?: string;
}

export interface Contador {
  id: string;
  numero: number;
  sufixo: string;
  descricao: string;
}