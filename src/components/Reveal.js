"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Reveal({ children, delay = 0 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentElement);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  return (
    <RevealWrapper ref={elementRef} $isVisible={isVisible} $delay={delay}>
      {children}
    </RevealWrapper>
  );
}

const RevealWrapper = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(28px)"};
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
  transition-delay: ${({ $delay }) => `${$delay}ms`};
`;
