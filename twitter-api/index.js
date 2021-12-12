const needle = require("needle");
const express = require("express");
require("dotenv").config();

const rulesUrl = "https://api.twitter.com/2/tweets/search/stream/rules";
const streamUrl =
  "https://api.twitter.com/2/tweets/search/stream?tweet.field=public_metrics&expansions=author_id";

const rules = [{ value: "giveaway" }];

async function getRules() {
  const response = await needle("GET", rulesUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
    },
  });
  console.log(response.body);
  return response.body;
}

async function setRules() {
  const data = {
    add: rules,
  };
  const response = await needle("POST", rulesUrl, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
    },
  });
  return response.body;
}

async function deleteRules(rules) {
  if (!Array.isArray(rules.data))
  const data = {
    add: rules,
  };
  const response = await needle("POST", rulesUrl, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
    },
  });
  return response.body;
}
(async () => {
  let currentRules;
  try {
    await setRules();
    currentRules = await getRules();
  } catch (error) {
    console.error(error);
    process.exit;
  }
})();
