import { ImageSourcePropType } from "react-native";

export default interface IBid {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  date: string;
}
