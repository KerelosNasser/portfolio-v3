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
  const next = useCallback(() => {
    setIndexInternal((i) => {
      const newIndex = i + 1;
      if (typeof slideCount === "number" && slideCount > 0) {
        return ((newIndex % slideCount) + slideCount) % slideCount;
      }
      return newIndex;
    });
  }, [slideCount]);
  const prev = useCallback(() => {
    setIndexInternal((i) => {
      const newIndex = i - 1;
      if (typeof slideCount === "number" && slideCount > 0) {
        return ((newIndex % slideCount) + slideCount) % slideCount;
      }
      return newIndex;
    });
  }, [slideCount]);

  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => {
      setIndexInternal((i) => {
        const newIndex = i + 1;
        if (typeof slideCount === "number" && slideCount > 0) {
          return ((newIndex % slideCount) + slideCount) % slideCount;
        }
        return newIndex;
      });
    }, interval);

    return () => clearInterval(id);
  }, [isPlaying, interval, slideCount]);

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
