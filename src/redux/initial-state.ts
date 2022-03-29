import { avatarArray, randomName } from "../utils/avatar-names";
const sw = require("star-wars-quotes");
const generateRandomDate = () => {
  const random = getRandomDate(
    new Date("2022-01-01T01:57:45.271Z"),
    new Date("2022-04-01T01:57:45.271Z")
  );
  return random;
};

function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

console.log(generateRandomDate());

const randomDate = Array.from({ length: 11 }, () => generateRandomDate()).sort(
  (a, b) => {
    return a.getTime() - b.getTime();
  }
);
const randomTweet = Array.from({ length: 8 }, () => sw());

const initialState = {
  tweets: [
    {
      id: "1",
      createdAt: new Date(randomDate[0]),
      tweet: randomTweet[0].split("-")[0],
      avatar: avatarArray[0],
      userName: randomName[0],
      like: false,
    },
    {
      id: "2",
      createdAt: new Date(randomDate[1]),
      tweet: randomTweet[1].split("-")[0],

      avatar: avatarArray[1],
      userName: randomName[1],
      like: true,
    },
    {
      id: "3",
      createdAt: new Date(randomDate[2]),
      tweet: randomTweet[2].split("-")[0],

      avatar: avatarArray[2],
      userName: randomName[2],
      like: false,
    },
    {
      id: "4",
      createdAt: new Date(randomDate[3]),
      tweet: randomTweet[3].split("-")[0],

      avatar: avatarArray[3],
      userName: randomName[3],
      like: false,
    },
    {
      id: "5",
      createdAt: new Date(randomDate[4]),
      tweet: randomTweet[4].split("-")[0],

      avatar: avatarArray[4],
      userName: randomName[4],
      like: true,
    },
    {
      id: "6",
      createdAt: new Date(randomDate[5]),
      tweet: randomTweet[5].split("-")[0],

      avatar: avatarArray[5],
      userName: randomName[5],
      like: true,
    },
    {
      id: "7",
      createdAt: new Date(randomDate[6]),
      tweet: randomTweet[6].split("-")[0],

      avatar: avatarArray[6],
      userName: randomName[6],
      like: true,
    },
    {
      id: "8",
      createdAt: new Date(randomDate[7]),
      tweet: randomTweet[7].split("-")[0],

      avatar: avatarArray[7],
      userName: randomName[7],
      like: false,
    },
  ],
  comments: [
    {
      id: "1",
      createdAt: new Date(randomDate[8]),
      tweetId: "8",
      comment: randomTweet[5].split("-")[0],
      avatar: avatarArray[3],
      userName: randomName[0],
      like: false,
    },
    {
      id: "2",
      createdAt: new Date(randomDate[9]),
      tweetId: "8",
      comment: randomTweet[6].split("-")[0],
      avatar: avatarArray[1],
      userName: randomName[1],
      like: false,
    },
    {
      id: "3",
      createdAt: new Date(randomDate[10]),
      tweetId: "7",
      comment: randomTweet[7].split("-")[0],
      avatar: avatarArray[2],
      userName: randomName[2],
      like: false,
    },
  ],
};

export default initialState;
