import { useMemo } from "react";
import { headerHeight } from "../components/Header";
import { screenHeight } from "../constants/ScreenDimensions";

export const snapPoints = () => useMemo(() => [screenHeight - (216 + headerHeight)], []);
