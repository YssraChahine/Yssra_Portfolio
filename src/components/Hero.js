"use client";

import styled from "styled-components";

export default function Hero() {
  return (
    <HeroSection>
      <BackgroundGlow />

      <HeroContent>
        <TextContent>
          <Eyebrow>Junior Frontend Developer · React · Next.js</Eyebrow>

          <Title>
            Ich baue moderne Web-Interfaces mit Code, Struktur und einem Blick
            für Nutzer.
          </Title>

          <Text>
            Hi, ich bin Yssra. Frontend Developer aus Hamburg. Ich verbinde
            React, Next.js und JavaScript mit Erfahrung aus Webentwicklung, UX,
            SEO und digitalen Projekten.
          </Text>

          <ButtonRow>
            <PrimaryLink href="#projects">Projekte ansehen</PrimaryLink>

            <SecondaryLink
              href="/CV_Yssra_Webentwicklung.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV herunterladen
            </SecondaryLink>
          </ButtonRow>

          <StatsRow>
            <StatItem>
              <StatNumber>960h</StatNumber>
              <StatText>Programmierpraxis</StatText>
            </StatItem>

            <StatItem>
              <StatNumber>React</StatNumber>
              <StatText>Frontend Fokus</StatText>
            </StatItem>

            <StatItem>
              <StatNumber>8+ Jahre</StatNumber>
              <StatText>Web & Digital</StatText>
            </StatItem>
          </StatsRow>
        </TextContent>

        <VisualCard>
          <CardTopBar>
            <Dot />
            <Dot />
            <Dot />
          </CardTopBar>

          <CodeBlock>
            <CodeLine>
              <CodeKeyword>const</CodeKeyword> developer = {"{"}
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;name: <CodeString>"Yssra Chahine"</CodeString>,
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;role:{" "}
              <CodeString>"Junior Frontend Developer"</CodeString>,
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;stack: [<CodeString>"React"</CodeString>,{" "}
              <CodeString>"Next.js"</CodeString>,{" "}
              <CodeString>"JavaScript"</CodeString>],
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;strengths: [<CodeString>"UX"</CodeString>,{" "}
              <CodeString>"Clean Code"</CodeString>,{" "}
              <CodeString>"Web Experience"</CodeString>],
            </CodeLine>
            <CodeLine>
              &nbsp;&nbsp;openToWork: <CodeBoolean>true</CodeBoolean>
            </CodeLine>
            <CodeLine>{"};"}</CodeLine>
          </CodeBlock>

          <FloatingBadge>Available for Junior Frontend roles</FloatingBadge>
        </VisualCard>
      </HeroContent>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 8rem 8vw 6rem;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(59, 130, 246, 0.36),
      transparent 32%
    ),
    radial-gradient(
      circle at 85% 25%,
      rgba(147, 197, 253, 0.22),
      transparent 28%
    ),
    linear-gradient(135deg, #020617 0%, #0f172a 48%, #1e3a8a 100%);
  color: #ffffff;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  right: -10rem;
  bottom: -10rem;
  width: 32rem;
  height: 32rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.38);
  filter: blur(90px);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  min-height: calc(100vh - 14rem);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  max-width: 760px;
`;

const Eyebrow = styled.p`
  width: fit-content;
  margin: 0 0 1.25rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid rgba(147, 197, 253, 0.28);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.08);
  color: #bfdbfe;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 880px;
  margin: 0;
  font-size: clamp(3rem, 7vw, 6.2rem);
  line-height: 0.92;
  letter-spacing: -0.075em;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 1.5rem 0 0;
  color: #dbeafe;
  font-size: clamp(1.08rem, 2vw, 1.28rem);
  line-height: 1.75;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 1.35rem;
  border-radius: 999px;
  background: #ffffff;
  color: #0f172a;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.32);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    background: #eff6ff;
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.42);
  }
`;

const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 1.35rem;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 999px;
  color: #ffffff;
  font-weight: 900;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.72);
  }
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
`;

const StatItem = styled.div`
  min-width: 140px;
  padding: 1rem;
  border: 1px solid rgba(147, 197, 253, 0.18);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
`;

const StatNumber = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 900;
`;

const StatText = styled.p`
  margin: 0.25rem 0 0;
  color: #bfdbfe;
  font-size: 0.9rem;
  font-weight: 700;
`;

const VisualCard = styled.div`
  position: relative;
  padding: 1.2rem;
  border: 1px solid rgba(147, 197, 253, 0.22);
  border-radius: 30px;
  background: rgba(15, 23, 42, 0.68);
  box-shadow:
    0 34px 90px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  transform: rotate(1deg);
  @media (max-width: 980px) {
    transform: none;
  }
`;

const CardTopBar = styled.div`
  display: flex;
  gap: 0.45rem;
  padding: 0.4rem 0.4rem 1rem;
`;

const Dot = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background: #93c5fd;
  &:nth-child(2) {
    background: #60a5fa;
  }
  &:nth-child(3) {
    background: #2563eb;
  }
`;

const CodeBlock = styled.pre`
  overflow-x: auto;
  margin: 0;
  padding: 1.5rem;
  border-radius: 22px;
  background: rgba(2, 6, 23, 0.84);
  color: #e2e8f0;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: clamp(0.78rem, 1.5vw, 0.95rem);
  line-height: 1.9;
`;

const CodeLine = styled.div`
  white-space: pre-wrap;
`;

const CodeKeyword = styled.span`
  color: #93c5fd;
  font-weight: 800;
`;

const CodeString = styled.span`
  color: #bfdbfe;
`;

const CodeBoolean = styled.span`
  color: #60a5fa;
  font-weight: 800;
`;

const FloatingBadge = styled.div`
  position: absolute;
  right: -1.2rem;
  bottom: -1.2rem;
  max-width: 230px;
  padding: 0.9rem 1rem;
  border-radius: 18px;
  background: #ffffff;
  color: #0f172a;
  font-size: 0.9rem;
  font-weight: 900;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
  @media (max-width: 520px) {
    position: static;
    margin-top: 1rem;
    max-width: none;
  }
`;
