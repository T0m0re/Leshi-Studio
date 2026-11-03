
import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

const CANVAS_WIDTH = 1600;
const CANVAS_HEIGHT = 900;

export default function ArtStage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setSize({
        width: Math.round(entry.contentRect.width),
        height: Math.round(entry.contentRect.height),
      });
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  const scale = Math.min(
    size.width / CANVAS_WIDTH,
    size.height / CANVAS_HEIGHT,
  );

  return (
    <div
      ref={containerRef}
      className="relative block h-full w-full min-h-0 min-w-0 overflow-hidden border border-amber-400"
    >
      {size.width > 0 && size.height > 0 && scale > 0 && (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer
            x={(size.width - CANVAS_WIDTH * scale) / 2}
            y={(size.height - CANVAS_HEIGHT * scale) / 2}
            scaleX={scale}
            scaleY={scale}
          >
            <Text text={`${size.width}`} fontSize={15} />
            <Rect
              x={100}
              y={100}
              width={200}
              height={120}
              fill="red"
              stroke="#000000"
              strokeWidth={2}
              draggable
            />
          </Layer>
        </Stage>
      )}
    </div>
  );
}
