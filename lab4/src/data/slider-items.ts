import { images } from "@src/assets";
import { ISlideItem } from "@src/types";

export const SliderItems: ISlideItem[] = [
  {
    id: 1,
    img: images.watch7,
    title: "Apple Watch Series 7",
    description: "The future of health is on your wrist",
    price: "$399",
  },
  {
    id: 2,
    img: images.airpod,
    title: "AirPods Pro",
    description: "Active noise cancellation for immersive sound",
    price: "$249",
  },
  {
    id: 3,
    img: images.airpodmax,
    title: "AirPods Max",
    description: "Effortless AirPods experience",
    price: "$549",
  },
  {
    id: 4,
    img: images.charger,
    title: "Charger",
    description: "It's not magic, it's just science",
    price: "$49",
  },
  {
    id: 5,
    img: images.lock,
    title: "Smart Lock",
    description: "Unlock your door with your phone",
    price: "$199",
  },
];
