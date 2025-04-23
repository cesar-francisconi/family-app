import { ActorNameProps } from "../ActorName/types";

export type ActorCardProps = {
    id: string;
    name: string;
    imageUrl: string;
    stroke?: boolean;
    actorNameBGTransparent?: ActorNameProps['bgTransparent'];
    borderRadius?: 'none' | 'large' | 'medium' | 'small' | 'none';
}