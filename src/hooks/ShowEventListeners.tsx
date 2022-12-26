import React, { useRef } from "react";
import useEventListener from "../customHooks/use_Event_Listeners";
import ReactDOM from "react-dom";

const ShowEventListeners = () => {
  const show = true;
  const onClose = () => null;
  const dialogRef: any = useRef();

  // Event Listener to close dialog on click outside element

  useEventListener(
    "mousedown",
    (event: any) => {
      if (event.defaultPrevented) {
        return; // do nothing if the event was already processed
      }
      if (dialogRef.current && !dialogRef.current?.contains(event.target)) {
        console.log("click outside detected --> closing dialog....");
        onClose();
      }
    },
    dialogRef.current
  );

  return show
    ? ReactDOM.createPortal(
        <div ref={dialogRef}>
          <div className="some">something is going on</div>
        </div>,
        document.body
      )
    : null;
};

export default ShowEventListeners;
