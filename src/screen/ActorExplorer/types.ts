import {
    TitleParam,
    MovieGenreType,
    CastMember,
} from "@/movie";

export type ActorExplorerLocalSearchParams = {
    actorId: CastMember['id'],
    genre: MovieGenreType;
};

export interface ActorExplorerProps {

};