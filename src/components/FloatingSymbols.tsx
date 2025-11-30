"use client";

import { useEffect, useRef } from "react";

export default function FloatingSymbols() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const symbols = [
      "∫",
      "∑",
      "∂",
      "√",
      "π",
      "∞",
      "≠",
      "≈",
      "≤",
      "≥",
      "±",
      "12",
      "4x",
      "y²",
      "log",
      "sin",
      "cos",
      "tan",
      "e",
      "f(x)",
    ];

    const particles: {
      x: number;
      y: number;
      text: string;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.font = `${p.size}px monospace`;
        ctx.fillStyle = `rgba(74, 222, 128, ${p.opacity})`; // Green color
        ctx.fillText(p.text, p.x, p.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
}
