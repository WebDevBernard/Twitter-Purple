// https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tweetData", serializedState);
  } catch {
    // We'll just ignore write errors
  }
};
// Loads the state and returns an object that can be provided as the
// preloadedState parameter of store.js's call to configureStore
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tweetData");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
