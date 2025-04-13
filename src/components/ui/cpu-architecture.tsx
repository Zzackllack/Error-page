import { cn } from "@/lib/utils";
import React from "react";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "CPU",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.3"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#cpu-circle-marker)"
      >
        {/* 1st */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 10 20 h 79.5 q 5 0 5 5 v 30"
        />
        {/* 2nd */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 180 10 h -69.7 q -5 0 -5 5 v 30"
        />
        {/* 3rd */}
        <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
        {/* 4th */}
        <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
        {/* 5th */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
        />
        {/* 6th */}
        <path d="M 94.8 95 v -36" />
        {/* 7th */}
        <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
        {/* 8th */}
        <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
        {/* Animation For Path Starting */}
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* Flow particles - Path 1 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p1-1" r="1.2" fill="url(#cpu-blue-grad)">
          <animateMotion
            path="M 10 20 h 79.5 q 5 0 5 5 v 30"
            dur="3s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
        <circle className="flow-particle flow-p1-2" r="1.2" fill="url(#cpu-blue-grad)">
          <animateMotion
            path="M 10 20 h 79.5 q 5 0 5 5 v 30"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>

      {/* Flow particles - Path 2 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p2-1" r="1.2" fill="url(#cpu-yellow-grad)">
          <animateMotion
            path="M 180 10 h -69.7 q -5 0 -5 5 v 30"
            dur="2.8s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
        <circle className="flow-particle flow-p2-2" r="1.2" fill="url(#cpu-yellow-grad)">
          <animateMotion
            path="M 180 10 h -69.7 q -5 0 -5 5 v 30"
            dur="2.8s"
            begin="1.4s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>

      {/* Flow particles - Path 3 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p3" r="1.2" fill="url(#cpu-pinkish-grad)">
          <animateMotion
            path="M 130 20 v 21.8 q 0 5 -5 5 h -10"
            dur="2.2s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>

      {/* Flow particles - Path 4 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p4" r="1.2" fill="url(#cpu-white-grad)">
          <animateMotion
            path="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
        <circle className="flow-particle flow-p4-2" r="1.2" fill="url(#cpu-white-grad)">
          <animateMotion
            path="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
            dur="2.5s"
            begin="1.25s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>
      
      {/* Flow particles - Path 5 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p5" r="1.2" fill="url(#cpu-green-grad)">
          <animateMotion
            path="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
            dur="3.5s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>

      {/* Flow particles - Path 6 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p6-1" r="1.2" fill="url(#cpu-orange-grad)">
          <animateMotion
            path="M 94.8 95 v -36"
            dur="1.8s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
        <circle className="flow-particle flow-p6-2" r="1.2" fill="url(#cpu-orange-grad)">
          <animateMotion
            path="M 94.8 95 v -36"
            dur="1.8s"
            begin="0.9s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>
      
      {/* Flow particles - Path 7 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p7" r="1.2" fill="url(#cpu-cyan-grad)">
          <animateMotion
            path="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
            dur="3s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
        <circle className="flow-particle flow-p7-2" r="1.2" fill="url(#cpu-cyan-grad)">
          <animateMotion
            path="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
            dur="3s"
            begin="1.5s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>
      
      {/* Flow particles - Path 8 */}
      <g className="flow-particles">
        <circle className="flow-particle flow-p8" r="1.2" fill="url(#cpu-rose-grad)">
          <animateMotion
            path="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
            dur="2.4s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
        <circle className="flow-particle flow-p8-2" r="1.2" fill="url(#cpu-rose-grad)">
          <animateMotion
            path="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
            dur="2.4s"
            begin="1.2s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1"
            keyTimes="0;1"
          />
        </circle>
      </g>

      {/* 1. Blue Light */}
      <g mask="url(#cpu-mask-1)">
        <circle
          className="cpu-architecture cpu-line-1"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-blue-grad)"
        >
          <animate 
            attributeName="r" 
            values="3;8;3" 
            dur="3s" 
            repeatCount="indefinite" 
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
          />
        </circle>
      </g>
      {/* 2. Yellow Light */}
      <g mask="url(#cpu-mask-2)">
        <circle
          className="cpu-architecture cpu-line-2"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-yellow-grad)"
        >
          <animate 
            attributeName="r" 
            values="4;8;4" 
            dur="2.8s" 
            repeatCount="indefinite" 
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
          />
        </circle>
      </g>
      {/* 3. Pinkish Light */}
      <g mask="url(#cpu-mask-3)">
        <circle
          className="cpu-architecture cpu-line-3"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-pinkish-grad)"
        />
      </g>
      {/* 4. White Light */}
      <g mask="url(#cpu-mask-4)">
        <circle
          className="cpu-architecture cpu-line-4"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-white-grad)"
        />
      </g>
      {/* 5. Green Light */}
      <g mask="url(#cpu-mask-5)">
        <circle
          className="cpu-architecture cpu-line-5"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-green-grad)"
        />
      </g>
      {/* 6. Orange Light */}
      <g mask="url(#cpu-mask-6)">
        <circle
          className="cpu-architecture cpu-line-6"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-orange-grad)"
        />
      </g>
      {/* 7. Cyan Light */}
      <g mask="url(#cpu-mask-7)">
        <circle
          className="cpu-architecture cpu-line-7"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-cyan-grad)"
        />
      </g>
      {/* 8. Rose Light */}
      <g mask="url(#cpu-mask-8)">
        <circle
          className="cpu-architecture cpu-line-8"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-rose-grad)"
        />
      </g>
      {/* CPU Box */}
      <g>
        {/* Cpu connections */}
        {showCpuConnections && (
          <g fill="url(#cpu-connection-gradient)">
            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
            <rect
              x="116.3"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />
            <rect
              x="122.8"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />
            <rect
              x="104"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />
            <rect
              x="114.5"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />
            <rect
              x="80"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />
            <rect
              x="87"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />
          </g>
        )}
        {/* Main CPU Rectangle */}
        <rect
          x="85"
          y="40"
          width="30"
          height="20"
          rx="2"
          fill="#181818"
          filter="url(#cpu-light-shadow)"
        >
          <animate 
            attributeName="fill" 
            values="#181818;#2a2a2a;#181818" 
            dur="1s" 
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
          />
        </rect>
        {/* CPU Text */}
        <text
          x="92"
          y="52.5"
          fontSize="7"
          fill={animateText ? "url(#cpu-text-gradient)" : "white"}
          fontWeight="600"
          letterSpacing="0.05em"
        >
          {text}
        </text>
      </g>
      {/* Masks */}
      <defs>
        <mask id="cpu-mask-1">
          <path
            d="M 10 20 h 79.5 q 5 0 5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-2">
          <path
            d="M 180 10 h -69.7 q -5 0 -5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-3">
          <path
            d="M 130 20 v 21.8 q 0 5 -5 5 h -10"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-4">
          <path
            d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-5">
          <path
            d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-6">
          <path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-7">
          <path
            d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-8">
          <path
            d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        {/* Gradients */}
        <radialGradient id="cpu-blue-grad" fx="1">
          <stop offset="0%" stopColor="#30C7FF" />
          <stop offset="50%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#FFE949" />
          <stop offset="50%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#FF59F8" />
          <stop offset="50%" stopColor="#A933FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-white-grad" fx="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#AAAAFF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-green-grad" fx="1">
          <stop offset="0%" stopColor="#4AFF91" />
          <stop offset="50%" stopColor="#09C35B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-orange-grad" fx="1">
          <stop offset="0%" stopColor="#FFAE35" />
          <stop offset="50%" stopColor="#FF5C00" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#35FFEA" />
          <stop offset="50%" stopColor="#00B9C3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-rose-grad" fx="1">
          <stop offset="0%" stopColor="#FF5B7A" />
          <stop offset="50%" stopColor="#FF2952" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter
          id="cpu-light-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="1.5"
            dy="1.5"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.1"
          />
        </filter>
        <marker
          id="cpu-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
        >
          <circle
            id="innerMarkerCircle"
            cx="5"
            cy="5"
            r="2"
            fill="black"
            stroke="#232323"
            strokeWidth="0.5"
          >
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>
        {/* Cpu connection gradient */}
        <linearGradient
          id="cpu-connection-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>
        {/* Add CPU Text Gradient */}
        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="-2; -1; 0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate
              attributeName="offset"
              values="-1; 0; 1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="0; 1; 2;"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { CpuArchitecture };
