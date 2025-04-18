type Actors = {
    id: string;
    name: string;
    imageUrl: string;
}

export type ActorsCardProps = {
    actors: Actors[];
    title?: string;
    showTitle?: boolean;
    actorCardStroke?: boolean;
    actorNameBGTransparent?: boolean;
}