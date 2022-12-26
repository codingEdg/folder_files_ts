import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType = "",
  listener: any = () => null,
  target: any = window,
  options = null
) {
  const savedListener: any = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target.addEventListener) return;
    const eventListener = (event: any) => savedListener.current(event);
    target.addEventListener(eventType, listener, options);

    return () => {
      return target.removeEventListener(eventType, listener, options);
    };
  }, [eventType, target, options]);
}
