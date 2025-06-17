import { useMemo } from "react";
import { Dimensions } from "react-native";
import { headerHeight } from "../components/Header";

const screenHeight = Dimensions.get('window').height;

export const snapPoints = () => useMemo(() => [screenHeight - (216 + headerHeight)], []);
