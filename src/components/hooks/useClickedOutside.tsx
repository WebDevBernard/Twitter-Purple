import React, { useRef, useEffect } from "react";

// custom hook to see if clicked outside of ref
let useClickedOutside = (handler: React.FormEvent) => {
  let domNode = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    let maybeHandler = (event: React.FormEvent) => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default useClickedOutside;
