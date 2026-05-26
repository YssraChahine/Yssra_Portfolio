"use client";

import styled from "styled-components";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <AboutSection id="about">
      <ContentWrapper>
        <IntroColumn>
          <Reveal>
            <SectionLabel>Über mich</SectionLabel>

            <Title>
              Ich komme nicht nur aus dem Code. Ich verstehe auch, wie digitale
              Produkte wirken müssen.
            </Title>

            <IntroText>
              Mein Weg verbindet Webentwicklung, digitales Marketing und
              modernes Frontend Development. Dadurch denke ich bei Interfaces
              nicht nur an Komponenten, sondern auch an Nutzerführung,
              Performance, Content und echte Ziele hinter einer Website.
            </IntroText>
          </Reveal>
        </IntroColumn>

        <StoryGrid>
          <Reveal delay={100}>
            <StoryCard>
              <CardNumber>01</CardNumber>
              <CardTitle>Web & Digital Experience</CardTitle>
              <CardText>
                Mehrjährige praktische Erfahrung mit Websites, WordPress,
                CMS-Projekten, SEO, Google Analytics und digitaler
                Projektumsetzung.
              </CardText>
            </StoryCard>
          </Reveal>

          <Reveal delay={180}>
            <StoryCard>
              <CardNumber>02</CardNumber>
              <CardTitle>Frontend Fokus</CardTitle>
              <CardText>
                Spezialisierung auf React, Next.js, JavaScript,
                komponentenbasierte Architektur, REST APIs und responsive
                Interfaces.
              </CardText>
            </StoryCard>
          </Reveal>

          <Reveal delay={260}>
            <StoryCard>
              <CardNumber>03</CardNumber>
              <CardTitle>Bootcamp Praxis</CardTitle>
              <CardText>
                960 Stunden Programmierpraxis bei neue fische mit Clean Code,
                Pair Programming, Git, Testing, UI/UX Basics und agilen
                Methoden.
              </CardText>
            </StoryCard>
          </Reveal>

          <Reveal delay={340}>
            <HighlightCard>
              <HighlightLabel>Was mich besonders macht</HighlightLabel>
              <HighlightTitle>
                Ich bringe technisches Lernen, echte Web-Erfahrung und ein gutes
                Auge für Nutzerführung zusammen.
              </HighlightTitle>
              <HighlightText>
                Für Junior Frontend Rollen ist genau das mein Vorteil: Ich kann
                neue Technologien lernen, aber ich verstehe auch schon, warum
                ein digitales Produkt für Nutzer klar, schnell und sinnvoll sein
                muss.
              </HighlightText>
            </HighlightCard>
          </Reveal>
        </StoryGrid>
      </ContentWrapper>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 8vw;
  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(37, 99, 235, 0.12),
      transparent 30%
    ),
    #f8fafc;
  color: #0f172a;
`;

const ContentWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 4rem;
  align-items: start;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const IntroColumn = styled.div`
  position: sticky;
  top: 7rem;
  @media (max-width: 980px) {
    position: static;
  }
`;

const SectionLabel = styled.p`
  width: fit-content;
  margin: 0 0 1.25rem;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

const IntroText = styled.p`
  margin: 1.5rem 0 0;
  color: #475569;
  font-size: 1.08rem;
  line-height: 1.8;
`;

const StoryGrid = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const StoryCard = styled.article`
  position: relative;
  overflow: hidden;
  padding: 1.7rem;
  border: 1px solid #e2e8f0;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
  &::after {
    content: "";
    position: absolute;
    right: -4rem;
    top: -4rem;
    width: 9rem;
    height: 9rem;
    border-radius: 999px;
    background: rgba(37, 99, 235, 0.08);
  }
  &:hover {
    transform: translateY(-6px);
    border-color: #bfdbfe;
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.12);
  }
`;

const CardNumber = styled.p`
  margin: 0 0 1.2rem;
  color: #2563eb;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.08em;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.45rem;
  letter-spacing: -0.04em;
`;

const CardText = styled.p`
  margin: 0.9rem 0 0;
  color: #475569;
  font-size: 1rem;
  line-height: 1.75;
`;

const HighlightCard = styled.article`
  padding: 2rem;
  border-radius: 32px;
  background:
    radial-gradient(
      circle at top right,
      rgba(147, 197, 253, 0.32),
      transparent 34%
    ),
    linear-gradient(135deg, #020617 0%, #0f172a 55%, #1d4ed8 100%);
  color: #ffffff;
  box-shadow: 0 30px 90px rgba(15, 23, 42, 0.22);
`;

const HighlightLabel = styled.p`
  margin: 0 0 1rem;
  color: #93c5fd;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const HighlightTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1;
  letter-spacing: -0.055em;
`;

const HighlightText = styled.p`
  margin: 1.25rem 0 0;
  color: #dbeafe;
  font-size: 1.05rem;
  line-height: 1.8;
`;
