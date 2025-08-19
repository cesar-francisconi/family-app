import { CastMember } from "@/movie";
import { ActorNameProps } from "../ActorName/types";

export type BorderRadiusActorCard = 'none' | 'small' | 'medium' | 'large';

export type ActorCardPropsDefault = {
    withStroke?: boolean;
    actorNameOptions?: ActorNameProps;
    borderRadius?: BorderRadiusActorCard;
    fnActorCardPress?: () => void;
}

export type ActorCardProps = CastMember & ActorCardPropsDefault;