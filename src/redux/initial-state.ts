import { avatarArray } from "../utils/avatar-names";
const initialState = {
  tweets: [
    {
      id: "1",
      createdAt: 1639077467544,
      tweet:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      avatar: avatarArray[0],
      userName: "Incididunt",
      like: true,
    },
    {
      id: "2",
      createdAt: 1639077467544,
      tweet:
        "Convallis duis nulla pulvinar rhoncus imperdiet. Dignissim arcu nostra justo aliquam, sociis nascetur placerat interdum pede. Quisque sodales sit. Praesent mollis senectus et eget facilisis. Est per vel etiam integer imperdiet. Penatibus magna penatibus maecenas. Vivamus.",

      avatar: avatarArray[1],
      userName: "Praesent",
      like: true,
    },
    {
      id: "3",
      createdAt: 1639077467544,
      tweet:
        "Facilisis leo venenatis lorem blandit nonummy augue lorem a, curae; sollicitudin magnis. Justo. Hac sit vivamus justo consequat. Pharetra nisl in risus tortor consequat vivamus litora condimentum cubilia egestas hendrerit. Dolor Lacinia sodales phasellus. Aliquam posuere.",

      avatar: avatarArray[2],
      userName: "Aliquam",
      like: false,
    },
    {
      id: "4",
      createdAt: 1639077467544,
      tweet:
        "Sem, gravida habitasse arcu consectetuer hac orci mi. Urna sagittis enim mauris ornare pretium hymenaeos purus non eros vehicula rutrum maecenas, sed aliquet integer tincidunt velit senectus faucibus.",

      avatar: avatarArray[3],
      userName: "Aliquet",
      like: false,
    },
    {
      id: "5",
      createdAt: 1639077467544,
      tweet:
        "Euismod nulla etiam. Elementum elementum faucibus risus. Aptent quam pede lectus. Cursus tempor tristique Varius potenti Dictumst Nibh mollis justo dui porttitor rutrum class.",

      avatar: avatarArray[4],
      userName: "elementum",
      like: true,
    },
  ],
  comments: [
    {
      id: "1",
      createdAt: 1639077467544,
      tweetId: "1",
      comment:
        "Euismod nulla etiam. Elementum elementum faucibus risus. Aptent quam pede lectus. Cursus tempor tristique Varius potenti Dictumst Nibh mollis justo dui porttitor rutrum class.",
      avatar: avatarArray[3],
      userName: "Aliquet",
      like: false,
    },
    {
      id: "2",
      createdAt: 1639077467544,
      tweetId: "1",
      comment:
        "Euismod nulla etiam. Elementum elementum faucibus risus. Aptent quam pede lectus. Cursus tempor tristique Varius potenti Dictumst Nibh mollis justo dui porttitor rutrum class.",
      avatar: avatarArray[1],
      userName: "Praesent",
      like: false,
    },
    {
      id: "3",
      createdAt: 1639077467544,
      tweetId: "1",
      comment:
        "Euismod nulla etiam. Elementum elementum faucibus risus. Aptent quam pede lectus. Cursus tempor tristique Varius potenti Dictumst Nibh mollis justo dui porttitor rutrum class.",
      avatar: avatarArray[2],
      userName: "Incididunt",
      like: false,
    },
  ],
};

export default initialState;
