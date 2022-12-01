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
    img: "https://i.ibb.co/QDdFfDS/download-1.jpg",
    title: "Help save kids in Africa",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/events/Help save kids in Africa",
  },
  {
    img: "/flat-halloween-party-poster_52683-45220.webp",
    title: "Halloween Party",
    des: "Come to the young visionaries halloween party",
    url: "/events/Halloween Party",
  },
  {
    img: "/flat-halloween-party-poster_52683-45220.webp",
    title: "Halloween Party",
    des: "Come to the young visionaries halloween party",
    url: "/events/Halloween Party",
  },

  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/events/Help save kids in Ukraine",
  },
  {
    img: "/ukraine-war-military-1.webp",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/events/Help save kids in Ukraine",
  },
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/events/Help save kids in Ukraine",
  },
  {
    img: "/ukraine-war-military-1.webp",
    title: "Help save kids in Afica",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/events/Help save kids in Africa",
  },
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/events/Help save kids in Ukraine",
  },
  {
    img: "/ukraine-war-military-1.webp",
    title: "Help save kids in Ukraine",
    des: "Help orphans in Ukraine by donating to help buy food.",
    url: "/events/Help save kids in Ukraine",
  },
];

const charitySiteList = [
  {
    img: "/hungrykid1.jpg",
    title: "Help save kids in Ukraine",
    body: lorem.generateParagraphs(3),
  },
  {
    img: "/flat-halloween-party-poster_52683-45220.webp",
    title: "Halloween Party",
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

    return list.filter(({ eventName }) => {
      return eventName === filteredFilter;
    });
  }
};

export { charityListFirst, charitySiteList, filtereList };
