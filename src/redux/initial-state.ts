import { avatarArray, randomName } from "../utils/avatar-names";
const sw = require("star-wars-quotes");

const randomTweet = Array.from({ length: 8 }, () => sw());

const initialState = {
  tweets: [
    {
      id: "1",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[0].split("-")[0],
      avatar: avatarArray[0],
      userName: randomName[0],
      like: false,
    },
    {
      id: "2",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[1].split("-")[0],

      avatar: avatarArray[1],
      userName: randomName[1],
      like: true,
    },
    {
      id: "3",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[2].split("-")[0],

      avatar: avatarArray[2],
      userName: randomName[2],
      like: false,
    },
    {
      id: "4",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[3].split("-")[0],

      avatar: avatarArray[3],
      userName: randomName[3],
      like: false,
    },
    {
      id: "5",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[4].split("-")[0],

      avatar: avatarArray[4],
      userName: randomName[4],
      like: true,
    },
    {
      id: "6",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[5].split("-")[0],

      avatar: avatarArray[5],
      userName: randomName[5],
      like: true,
    },
    {
      id: "7",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[6].split("-")[0],

      avatar: avatarArray[6],
      userName: randomName[6],
      like: true,
    },
    {
      id: "8",
      createdAt: new Date(1639077467544),
      tweet: randomTweet[7].split("-")[0],

      avatar: avatarArray[7],
      userName: randomName[7],
      like: false,
    },
  ],
  comments: [
    {
      id: "1",
      createdAt: new Date(1639077467544),
      tweetId: "5",
      comment: randomTweet[5].split("-")[0],
      avatar: avatarArray[3],
      userName: randomName[0],
      like: false,
    },
    {
      id: "2",
      createdAt: new Date(1639077467544),
      tweetId: "5",
      comment: randomTweet[6].split("-")[0],
      avatar: avatarArray[1],
      userName: randomName[1],
      like: false,
    },
    {
      id: "3",
      createdAt: new Date(1639077467544),
      tweetId: "5",
      comment: randomTweet[7].split("-")[0],
      avatar: avatarArray[2],
      userName: randomName[2],
      like: false,
    },
  ],
};

export default initialState;
