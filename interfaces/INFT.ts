import { ImageSourcePropType } from "react-native";
import IBid from "./IBid";

export default interface INFT {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
  bids: IBid[];
}
