import { v4 as uuidv4 } from "uuid";
import img1 from "../public/Imgs/img1.jpg"
import img2 from "../public/Imgs/img2.jpg"
import img3 from "../public/Imgs/img3.jpg"
import img4 from "../public/Imgs/img4.jpg"
import img5 from "../public/Imgs/img5.jpg"
const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    imagePath: img1,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    imagePath: img5,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    imagePath: img2,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    imagePath: img3,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    imagePath: img4,
  },
];
export default dataSlider
