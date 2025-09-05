import { useMemo } from "react";
import { screenHeight } from "../constants/ScreenDimensions";
import { headerHeight } from "../constants/DefautConfig";

export const snapPoints = () => useMemo(() => [screenHeight - (216 + headerHeight)], []);
