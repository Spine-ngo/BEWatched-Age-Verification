import { Gender } from "../types/gender.type";
import { Model } from "../types/model.type";

export const modelsDefault: Model[] = [
  {
    id: "default-0",
    imagePath: 'https://randomuser.me/api/portraits/lego/0.jpg',
    underaged: false
  },
  {
    id: 'default-1',
    imagePath: 'https://randomuser.me/api/portraits/lego/1.jpg',
    underaged: true,
    gender: Gender.Male
  },
  {
    id: 'default-2',
    imagePath: 'https://randomuser.me/api/portraits/lego/2.jpg',
    underaged: false,
    gender: Gender.Male
  },
  {
    id: 'default-3',
    imagePath: 'https://randomuser.me/api/portraits/lego/3.jpg',
    underaged: false,
    gender: Gender.Male
  },
  {
    id: 'default-4',
    imagePath: 'https://randomuser.me/api/portraits/lego/4.jpg',
    underaged: true,
    gender: Gender.NonBinary
  },
  {
    id: 'default-5',
    imagePath: 'https://randomuser.me/api/portraits/lego/5.jpg',
    underaged: true,
    gender: Gender.Male
  },
  {
    id: 'default-6',
    imagePath: 'https://randomuser.me/api/portraits/lego/6.jpg',
    underaged: false,
    gender: Gender.Male
  },
  {
    id: 'default-7',
    imagePath: 'https://randomuser.me/api/portraits/lego/7.jpg',
    underaged: true,
    gender: Gender.Female
  },
  {
    id: 'default-8',
    imagePath: 'https://randomuser.me/api/portraits/lego/8.jpg',
    underaged: false,
    gender: Gender.Male
  },
  {
    id: 'default-9',
    imagePath: 'https://randomuser.me/api/portraits/lego/9.jpg',
    underaged: false,
    gender: Gender.Female
  },
]
