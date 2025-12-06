import { useRef, useState, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  width?: string; // e.g., "full", "w-96"
  height?: string; // e.g., "h-96"
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  width = "w-full",
  height = "h-96",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50); // percentage

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    let clientX: number;

    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const rect = containerRef.current.getBoundingClientRect();
    let newPos = ((clientX - rect.left) / rect.width) * 100;
    if (newPos < 0) newPos = 0;
    if (newPos > 100) newPos = 100;
    setSliderPos(newPos);
  };

  const startDrag = () => {
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleDrag);
    window.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchmove", handleDrag);
    window.removeEventListener("touchend", stopDrag);
  };

  return (
    <div
      ref={containerRef}
      className={`${width} ${height} relative overflow-hidden rounded-xl border border-gray-200`}>
      {/* Before Image */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* After Image */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}>
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 -translate-x-1/2 h-full w-1.5 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}>
        {/* Optional handle circle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-2 border-white shadow-md" />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
