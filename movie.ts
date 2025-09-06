export type GenderType = 'masculino' | 'feminino' | 'outro';
export type MovieGenreType = string;

export type TitleParam = string;

export interface CastMember {
    id: string;
    name: string;
    description: string;
    avatar: string;
    dateOfBirth: string; // formato ISO: 'YYYY-MM-DD'
    placeOfBirth: string;
    stateOfBirth: string;
    gender: GenderType;
}

export interface CommentAnswer {
    id: string;
    username: string;
    userId: string,
    time: number; // em segundos
    avatar: string | null;
    likes: string[];
    dislikes: string[];
    answer: string;
    isEdit: boolean;
}

export interface Comment {
    id: string;
    username: string;
    userId: string,
    time: number; // em segundos
    avatar: string | null;
    comment: string;
    likes: string[];
    dislikes: string[];
    answers: CommentAnswer[];
    isEdit: boolean;
}

export interface Movie {
    id: string;
    title: string;
    description: string;
    time: number; // duração em minutos
    date: string; // formato ISO: 'YYYY-MM-DD'
    addedAt: string; // data em que foi adicionado à plataforma
    averageColor: string,
    thumbnail: string;
    like: number;
    category: string;
    director: string;
    genre: MovieGenreType[]; // gêneros como "ficção científica", "aventura", etc.
    mainGenre: MovieGenreType; // gêneros como "ficção científica", "aventura", etc.
    cast: CastMember[];
    comments: Comment[];
};