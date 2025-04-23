import { ActorCardProps } from "../ActorCard/types";
import { ActorNameProps } from "../ActorName/types";

export type ActorsCardProps = {
    data: ActorCardProps[];
    title?: string;
    showTitle?: boolean;
    actorCardStroke?: ActorCardProps['stroke'];
    actorNameBGTransparent?: ActorNameProps['bgTransparent'];
}