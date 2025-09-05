import { Colors } from "../constants/Colors";
import { HeaderOptions } from "./setHeaderOptions";

export function resolveHeaderContainerStyle(transparentBackground: HeaderOptions['transparentBackground'], withBottomStroke: HeaderOptions['withBottomStroke']) {
    return {
        backgroundColor: transparentBackground ? 'transparent' : Colors.surface.main,
        borderBottomWidth: withBottomStroke ? 1 : 0,
    };
};