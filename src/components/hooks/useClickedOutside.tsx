import { useRef, useEffect } from "react";
// https://stackoverflow.com/questions/62454630/react-typescript-type-for-mousedown-and-touchstart-events
// custom hook to see if clicked outside of ref
function useClickedOutside(handler: () => void) {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let maybeHandler = (event: TouchEvent | MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
}

export default useClickedOutside;
