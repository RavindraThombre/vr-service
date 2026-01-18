"use client";

type ElectricBackgroundProps = {
  opacity?: number;
  lineColor?: string;
  lineWidth?: number;
  speed?: number;
  enableHoverPulse?: boolean;
};

export default function ElectricBackground({
  opacity = 0.25,
  lineColor = "rgba(255,255,255,0.6)",
  lineWidth = 1.5,
  speed = 60,
  enableHoverPulse = false,
}: ElectricBackgroundProps) {
  // ✅ Initialize state synchronously (NO effect needed)
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${
        enableHoverPulse ? "group-hover:opacity-40" : ""
      }`}
      style={{
        transition: enableHoverPulse ? "opacity 600ms ease" : undefined,
      }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 400 400"
      >
        <defs>
          <pattern
            id="electric-pattern"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(135)"
          >
            <line
              x1="0"
              y1="0"
              x2="120"
              y2="0"
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
          </pattern>
        </defs>

        <g opacity={opacity}>
          <rect width="100%" height="100%" fill="url(#electric-pattern)" />

          {/* ✅ Animation only if motion allowed */}
          {!reduceMotion && (
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="300 300"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          )}
        </g>
      </svg>
    </div>
  );
}
