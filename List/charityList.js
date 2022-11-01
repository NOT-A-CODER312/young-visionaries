import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const charityListFirst = [
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Ukraine",
  },
  {
    img: "/ukraine-war-military-1.webp",
    title: "Help save kids in Africa",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Africa",
  },
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Ukraine",
  },
  {
    img: "/ukraine-war-military-1.webp",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Ukraine",
  },
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Ukraine",
  },
  {
    img: "/ukraine-war-military-1.webp",
    title: "Help save kids in Afica",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Africa",
  },
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Ukraine",
  },
  {
    img: "/ukraine-war-military-1.webp",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/charities/Help save kids in Ukraine",
  },
];

const charitySiteList = [
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    body: lorem.generateParagraphs(3),
  },
  {
    img: "/UNI235897.jpg",
    title: "Help save kids in Africa",
    body: lorem.generateParagraphs(3),
  },
];

const filtereList = (list, filter) => {
  // removed lowercase to get perfect search urls
  if (filter !== undefined) {
    const filteredFilter = filter;

    return list.filter(({ title }) => {
      return title === filteredFilter;
    });
  }
};

export { charityListFirst, charitySiteList, filtereList };
