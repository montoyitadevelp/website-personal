import { useState, forwardRef } from "react";
import Tippy, { TippyProps } from "@tippyjs/react";

type LazyTippyProps = {
  render?: TippyProps["render"];
  content?: TippyProps["content"];
  plugins?: TippyProps["plugins"];
} & TippyProps;

//Lazy loading para mejorar el montaje y desmontaje del tooltip para el usuario
export const LazyTippy = forwardRef<HTMLDivElement, LazyTippyProps>(
  (props, ref) => {
    const [mounted, setMounted] = useState(false);

    const lazyPlugin = {
      fn: () => ({
        onMount: () => setMounted(true),
        onHidden: () => setMounted(false),
      }),
    };

    const computedProps: LazyTippyProps = { ...props };

    computedProps.plugins = [lazyPlugin, ...(props.plugins || [])];

    if (props.render) {
      computedProps.render = (...args) =>
        mounted ? props.render!(...args) : "";
    } else {
      computedProps.content = mounted ? props.content || "" : "";
    }

    return <Tippy {...computedProps} ref={ref} />;
  }
);
