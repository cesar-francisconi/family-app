import { CastMember } from "@/movie";
import { ActorNameProps } from "../ActorName/types";

export type ActorCardPropsDefault = {
    withStroke?: boolean;
    actorNameOptions?: ActorNameProps;
    borderRadius?: 'none' | 'large' | 'medium' | 'small' | 'none';
    fnActorCardPress?: () => void;
}

export type ActorCardProps = CastMember & ActorCardPropsDefault;