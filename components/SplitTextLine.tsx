import {
  createElement,
  useEffect,
  useState,
  type ElementType,
  type HTMLAttributes,
} from "react";
import { animate } from "motion";
import SplitType from "split-type";

type SplitTextLineProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  text: string;
  as?: ElementType;
  stagger?: number;
  delay?: number;
};

export default function SplitTextLine({
  text,
  as: Component = "p",
  className = "",
  stagger = 0.1,
  delay = 0,
  ...props
}: SplitTextLineProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    let disposed = false;
    let split: SplitType | undefined;
    let animations: ReturnType<typeof animate>[] = [];
    let previousWidth = 0;

    const splitAndAnimate = () => {
      animations.forEach((animation) => animation.stop());
      split?.revert();

      split = new SplitType(element, {
        types: "lines",
        lineClass: "split-line",
        tagName: "span",
      });

      const lines = split.lines ?? [];
      animations = lines.map((line, index) => {
        const mask = document.createElement("span");
        mask.className = "split-line-mask";
        mask.style.display = "block";
        mask.style.overflow = "hidden";
        mask.style.width = "100%";
        line.style.display = "block";
        line.style.width = "100%";
        line.parentNode?.insertBefore(mask, line);
        mask.appendChild(line);

        return animate(
          line,
          { y: ["100%", "0%"], opacity: [0, 1] },
          {
            duration: 0.8,
            delay: delay + index * stagger,
            ease: [0.22, 1, 0.36, 1],
          },
        );
      });

      previousWidth = element.getBoundingClientRect().width;
    };

    const resizeObserver = new ResizeObserver(() => {
      if (
        document.fonts.status === "loaded" &&
        Math.abs(element.getBoundingClientRect().width - previousWidth) > 0.5
      ) {
        splitAndAnimate();
      }
    });
    resizeObserver.observe(element);

    document.fonts.ready.then(() => {
      if (!disposed) splitAndAnimate();
    });

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      animations.forEach((animation) => animation.stop());
      split?.revert();
    };
  }, [element, text, stagger, delay]);

  return createElement(
    Component,
    {
      key: text,
      ...props,
      ref: setElement,
      className,
      "aria-label": text,
    },
    text,
  );
}
