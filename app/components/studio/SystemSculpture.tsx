"use client";
import { useEffect, useRef, useState } from "react";
type Point = [number, number, number];
const TAU = Math.PI * 2;
const curve = (t: number): Point => [
  (1.5 + 0.48 * Math.cos(3 * t)) * Math.cos(2 * t),
  (1.5 + 0.48 * Math.cos(3 * t)) * Math.sin(2 * t),
  0.7 * Math.sin(3 * t),
];
const normalize = (p: Point): Point => {
  const length = Math.hypot(...p);
  return p.map((v) => v / length) as Point;
};
// Sample once; each animation frame only rotates and projects the geometry.
function makeGeometry() {
  return Array.from({ length: 170 }, (_, i) => {
    const t = (i / 170) * TAU;
    const c = curve(t),
      next = curve(t + 0.001);
    const tangent = normalize(next.map((v, j) => v - c[j]) as Point);
    const normal = normalize([-tangent[1], tangent[0], 0]);
    const binormal: Point = [
      tangent[1] * normal[2] - tangent[2] * normal[1],
      tangent[2] * normal[0] - tangent[0] * normal[2],
      tangent[0] * normal[1] - tangent[1] * normal[0],
    ];
    return Array.from({ length: 29 }, (_, j): Point => {
      const a = (j / 28) * TAU;
      return c.map(
        (v, k) =>
          v + 0.31 * (Math.cos(a) * normal[k] + Math.sin(a) * binormal[k]),
      ) as Point;
    });
  });
}
export default function SystemSculpture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const geometry = makeGeometry();
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1,
      height = 1,
      frame = 0,
      phase = 0.2,
      previousTime = 0;
    let visible = true,
      reduced = media.matches,
      pointerX = 0,
      pointerY = 0,
      x = 0,
      y = 0;
    let dark = document.documentElement.classList.contains("dark");
    const rotate = ([px, py, pz]: Point, a: number, b: number): Point => {
      const xx = px * Math.cos(a) + pz * Math.sin(a),
        zz = -px * Math.sin(a) + pz * Math.cos(a);
      return [
        xx,
        py * Math.cos(b) - zz * Math.sin(b),
        py * Math.sin(b) + zz * Math.cos(b),
      ];
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) * 0.18;
      const transformed = geometry
        .map((ring, i) => {
          const points = ring.map((p) => rotate(p, phase + x, 0.72 + y));
          return {
            points,
            i,
            z: points.reduce((sum, p) => sum + p[2], 0) / points.length,
          };
        })
        .sort((a, b) => a.z - b.z);
      for (const ring of transformed) {
        const depth = (ring.z + 2.3) / 4.6;
        ctx.beginPath();
        ring.points.forEach(([px, py, pz], j) => {
          const perspective = 5.7 / (5.7 - pz);
          const sx = width / 2 + px * scale * perspective,
            sy = height / 2 + py * scale * perspective;
          if (j === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        });
        ctx.closePath();
        ctx.fillStyle = dark ? "rgba(23,27,23,.75)" : "rgba(241,243,236,.75)";
        ctx.fill();
        ctx.strokeStyle = dark
          ? `rgba(205,250,132,${0.2 + depth * 0.72})`
          : `rgba(46,75,37,${0.16 + depth * 0.75})`;
        ctx.lineWidth = dark ? 0.85 : 0.75;
        ctx.stroke();
      }
    };
    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);
      if (time - previousTime < 32 || !visible || document.hidden) return;
      const delta = Math.min(time - previousTime, 50);
      previousTime = time;
      if (!reduced && !pausedRef.current) {
        phase += delta * 0.00009;
        x += (pointerX - x) * 0.035;
        y += (pointerY - y) * 0.035;
      } else return;
      draw();
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    });
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "50px" },
    );
    const theme = new MutationObserver(() => {
      dark = document.documentElement.classList.contains("dark");
      draw();
    });
    const motionChange = () => {
      reduced = media.matches;
      draw();
    };
    const pointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.75;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    const pointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };
    resize.observe(canvas);
    intersection.observe(canvas);
    theme.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    canvas.addEventListener("pointermove", pointerMove);
    canvas.addEventListener("pointerleave", pointerLeave);
    media.addEventListener("change", motionChange);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      theme.disconnect();
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("pointerleave", pointerLeave);
      media.removeEventListener("change", motionChange);
    };
  }, []);
  return (
    <figure className="system-sculpture">
      <div className="sculpture-top">
        <span className="eyebrow">Systems in motion</span>
        <span className="eyebrow">Fig. 001</span>
      </div>
      <div className="sculpture-grid" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="A slowly rotating three-dimensional knot of connected paths, representing interconnected systems"
      />
      <div className="sculpture-bottom">
        <figcaption className="eyebrow">
          Code <span>→</span> Cloud <span>→</span> People
        </figcaption>
        <button
          type="button"
          className="sculpture-pause"
          aria-label={
            paused ? "Play sculpture animation" : "Pause sculpture animation"
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
        </button>
      </div>
      <span className="sculpture-corner corner-tl" aria-hidden="true">
        +
      </span>
      <span className="sculpture-corner corner-br" aria-hidden="true">
        +
      </span>
    </figure>
  );
}
