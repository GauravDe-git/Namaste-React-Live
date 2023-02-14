import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, SetIsOnline] = useState(true);

  useEffect(() => {
    const checkOnline = () => {
      SetIsOnline(true);
    };
    const checkOffline = () => {
      SetIsOnline(false);
    };

    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);

    return () => {
      window.removeEventListener("online", checkOnline);
      window.removeEventListener("offline", checkOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
