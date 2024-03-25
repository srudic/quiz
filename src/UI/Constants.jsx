import { MdOutlinePets } from "react-icons/md";
import { ImVideoCamera } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { GiSoccerBall } from "react-icons/gi";

import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaBalanceScaleRight } from "react-icons/fa";

export const CATEGORIES = [
  {
    id: 27,
    name: "Animals",
    icon: <MdOutlinePets size={25} />,
    selected: false,
  },
  {
    id: 26,
    name: "Celebrities",
    icon: <ImVideoCamera size={25} />,
    selected: false,
  },
  {
    id: 22,
    name: "Geography",
    icon: <TbWorld size={25} />,
    selected: false,
  },
  {
    id: 21,
    name: "Sports",
    icon: <GiSoccerBall size={25} />,
    selected: false,
  },
];

export const DIFFICULTIES = [
  {
    id: 1,
    name: "Easy",
    icon: <FaBalanceScaleLeft size={25} />,
    selected: false,
  },
  {
    id: 2,
    name: "Medium",
    icon: <FaBalanceScale size={25} />,
    selected: false,
  },
  {
    id: 3,
    name: "Hard",
    icon: <FaBalanceScaleRight size={25} />,
    selected: false,
  },
];
