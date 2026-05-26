"use client";

import styled from "styled-components";

const techItems = [
  "React",
  "Next.js",
  "JavaScript",
  "Styled Components",
  "REST APIs",
  "Node.js Basics",
  "MongoDB",
  "GitHub",
  "Clean Code",
  "UI/UX",
  "Responsive Design",
  "SEO",
];

export default function TechMarquee() {
  return (
    <MarqueeSection aria-label="Tech Stack">
      <MarqueeTrack>
        <MarqueeGroup>
          {techItems.map((item) => (
            <TechItem key={item}>{item}</TechItem>
          ))}
        </MarqueeGroup>

        <MarqueeGroup aria-hidden="true">
          {techItems.map((item) => (
            <TechItem key={`${item}-duplicate`}>{item}</TechItem>
          ))}
        </MarqueeGroup>
      </MarqueeTrack>
    </MarqueeSection>
  );
}

const MarqueeSection = styled.section`
  overflow: hidden;
  border-top: 1px solid rgba(147, 197, 253, 0.14);
  border-bottom: 1px solid rgba(147, 197, 253, 0.14);
  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(37, 99, 235, 0.16),
      transparent 35%
    ),
    #020617;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: scroll 28s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  @keyframes scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }
`;

const MarqueeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.15rem 0;
`;

const TechItem = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 1rem;
  border: 1px solid rgba(147, 197, 253, 0.2);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.08);
  color: #dbeafe;
  font-size: 0.95rem;
  font-weight: 900;
  white-space: nowrap;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  &::before {
    content: "";
    width: 0.45rem;
    height: 0.45rem;
    margin-right: 0.55rem;
    border-radius: 999px;
    background: #60a5fa;
    box-shadow: 0 0 18px rgba(96, 165, 250, 0.9);
  }
`;
