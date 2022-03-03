import { useEffect, useState } from "react";
// this useEffect makes it so the conditional default element is not shown when the app is checking if currentUser exists
const useAvatarReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 150);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return ready;
};

export default useAvatarReady;
