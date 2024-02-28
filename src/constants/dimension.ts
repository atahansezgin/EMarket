import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const guidelineBaseHeight = 844;
const guidelineBaseWidth = 390;

export function responsiveHeight(size: number) {
  return SCREEN_HEIGHT / (guidelineBaseHeight / size);
}

export function responsiveWidth(size: number) {
  return SCREEN_WIDTH / (guidelineBaseWidth / size);
}