import { CastMember } from "@/movie";
import { ActorCardProps } from "../ActorCard/types";
import { ActorNameProps } from "../ActorName/types";

export type CastProps = {
    data: CastMember[];
    title?: string;
    withTitle?: boolean;
    actorCardOptions?: ActorCardProps;
    actorNameOptions?: ActorNameProps;
}