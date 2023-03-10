// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../Pages/imgs/img1.png"
import img2 from "../Pages/imgs/img2.png"
import img3 from "../Pages/imgs/img3.png"


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Portal",
  },
  {
    icon: UilClipboardAlt,
    heading: "Contests",
  },
  {
    icon: UilUsersAlt,
    heading: "Customer reports",
  },
  // {
  //   icon: UilPackage,
  //   heading: 'Products'
  // },
  // {
  //   icon: UilChart,
  //   heading: 'Analytics'
  // },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Accounts",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 50,
    png: UilUsdSquare,
    series: [
      {
        name: "Accounts",
        data: [30, 20, 2, 100, 40, 25, 90],
      },
    ],
  },
  {
    title: "Contest registerd",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Contest",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Blogs",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];




