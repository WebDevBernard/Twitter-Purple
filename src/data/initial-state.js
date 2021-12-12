import { avatarArray } from "../utils/generate-avatar-names";
const initialState = [
  {
    id: "1",
    createdAt: 1639077467544,
    tweet:
      "Try out the login feature without signing up by logging in with email: guest@email.com // pw: 123456",
    avatar: avatarArray[3],
    userName: "Bernard_Yang",
    like: true,
    reply: [],
  },
  {
    id: "2",
    createdAt: 1639077467544,
    tweet:
      "Yes, it's not exactly Twitter but it does have data persisted through local storage, and a login connected to Firebase.",

    avatar: avatarArray[3],
    userName: "Bernard_Yang",
    like: true,
    reply: [
      {
        id: "1",
        createdAt: 1639077467544,
        comment:
          "If not logged in, username will be randomized when page is refreshed.",
        avatar: avatarArray[3],
        userName: "Bernard_Yang",
        like: false,
      },
      {
        id: "2",
        createdAt: 1639077467544,
        comment:
          "On either home page, click on a username to toggle user tweets and the home page.",
        avatar: avatarArray[3],
        userName: "Bernard_Yang",
        like: false,
      },
    ],
  },
];

export default initialState;
