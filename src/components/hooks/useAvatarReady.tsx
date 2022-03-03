import { useEffect, useState } from "react";

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
