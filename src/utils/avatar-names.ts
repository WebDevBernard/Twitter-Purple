import { uniqueNamesGenerator, starWars, Config } from "unique-names-generator";

const avatars = {
  Female: [
    "https://i.imgur.com/nlhLi3I.png",
    "https://i.imgur.com/z5LNkkB.png",
    "https://i.imgur.com/v0JXau2.png",
    "https://i.imgur.com/lRUnDgU.png",
    "https://i.imgur.com/3GvwNBf.png",
  ],
  Male: [
    "https://i.imgur.com/73hZDYK.png",
    "https://i.imgur.com/5fUVPRP.png",
    "https://i.imgur.com/DVpDmdR.png",
    "https://i.imgur.com/2WZtOD6.png",
    "https://i.imgur.com/ilT4JDe.png",
  ],
};
export const avatarArray = Object.values(avatars.Male).concat(
  Object.values(avatars.Female)
);
const avatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];

export const shortName = uniqueNamesGenerator({
  dictionaries: [starWars],
  length: 1,
});

const config: Config = {
  dictionaries: [starWars],
};
export const randomName = Array.from({ length: 8 }, () =>
  uniqueNamesGenerator(config)
);

export default avatar;
