import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia";
let lorem29 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tour", text: "tour" },
];

export const socialLinks = [
  { id: 1, href: "https://facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: lorem,
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: lorem,
  },

  {
    id: 2,
    icon: "fas fa-socks fa-fw",
    title: "Amazin Comfort",
    text: lorem,
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th 2020",
    title: "Tibet Adventure",
    info: lorem29,
    location: "china",
    duration: 6,
    cost: 2100,
  },

  {
    id: 2,
    image: tour2,
    date: "october 1th 2020",
    title: "Best Of Java",
    info: lorem29,
    location: "Indonesia",
    duration: 11,
    cost: 2100,
  },

  {
    id: 3,
    image: tour3,
    date: "September 15th 2020",
    title: "explore hong kong",
    info: lorem29,
    location: "Hong Kong",
    duration: 8,
    cost: 5000,
  },

  {
    id: 4,
    image: tour4,
    date: "December 5th 2019",
    title: "Kenya Highlights",
    info: lorem29,
    location: "Kenya",
    duration: 20,
    cost: 3300,
  },
];
