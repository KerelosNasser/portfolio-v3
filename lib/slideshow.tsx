"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";

type SlideshowContextValue = {
  isPlaying: boolean;
  index: number;
  start: () => void;
  stop: () => void;
  next: () => void;
  prev: () => void;
  setIndex: (i: number) => void;
};

type SlideshowProviderProps = {
  children: ReactNode;
  interval?: number;
  slideCount?: number;
};

const SlideshowContext = createContext<SlideshowContextValue | undefined>(
  undefined
);

export function SlideshowProvider({
  children,
  interval = 3000,
  slideCount,
}: SlideshowProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [index, setIndexInternal] = useState(0);

  const setIndex = useCallback(
    (i: number) => {
      if (typeof slideCount === "number" && slideCount > 0) {
        const wrapped = ((i % slideCount) + slideCount) % slideCount;
        setIndexInternal(wrapped);
      } else {
        setIndexInternal(i);
      }
    },
    [slideCount]
  );

  const start = useCallback(() => setIsPlaying(true), []);
  const stop = useCallback(() => setIsPlaying(false), []);
  const next = useCallback(() => setIndex((i) => i + 1), [setIndex]);
  const prev = useCallback(() => setIndex((i) => i - 1), [setIndex]);

  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, interval);

    return () => clearInterval(id);
  }, [isPlaying, interval, setIndex]);

  const value: SlideshowContextValue = {
    isPlaying,
    index,
    start,
    stop,
    next,
    prev,
    setIndex,
  };

  return (
    <SlideshowContext.Provider value={value}>
      {children}
    </SlideshowContext.Provider>
  );
}

export function useSlideshow() {
  const ctx = useContext(SlideshowContext);
  if (!ctx) {
    throw new Error("useSlideshow must be used inside a SlideshowProvider");
  }
  return ctx;
}
