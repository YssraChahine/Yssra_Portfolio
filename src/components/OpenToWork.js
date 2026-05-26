"use client";

import styled from "styled-components";
import Reveal from "@/components/Reveal";

export default function OpenToWork() {
  return (
    <OpenToWorkSection>
      <ContentWrapper>
        <Reveal>
          <Badge>Open to Work</Badge>

          <Title>
            Ich suche eine Junior Frontend Rolle, in der ich moderne Interfaces
            bauen und weiter wachsen kann.
          </Title>

          <Text>
            Besonders spannend finde ich Teams, die mit React, Next.js,
            JavaScript, APIs und nutzerzentrierten Webprodukten arbeiten, remote
            oder hybrid in Hamburg/Berlin.
          </Text>
        </Reveal>

        <InfoGrid>
          <Reveal delay={100}>
            <InfoCard>
              <InfoLabel>Fokus</InfoLabel>
              <InfoValue>Frontend Development</InfoValue>
            </InfoCard>
          </Reveal>

          <Reveal delay={180}>
            <InfoCard>
              <InfoLabel>Stack</InfoLabel>
              <InfoValue>React · Next.js · JavaScript</InfoValue>
            </InfoCard>
          </Reveal>

          <Reveal delay={260}>
            <InfoCard>
              <InfoLabel>Arbeitsmodell</InfoLabel>
              <InfoValue>Remote / Hybrid</InfoValue>
            </InfoCard>
          </Reveal>
        </InfoGrid>

        <Reveal delay={320}>
          <ButtonRow>
            <PrimaryLink href="#contact">Kontakt aufnehmen</PrimaryLink>

            <SecondaryLink
              href="/CV_Yssra_Webentwicklung.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV herunterladen
            </SecondaryLink>
          </ButtonRow>
        </Reveal>
      </ContentWrapper>
    </OpenToWorkSection>
  );
}

const OpenToWorkSection = styled.section`
  padding: 7rem 8vw;
  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(147, 197, 253, 0.24),
      transparent 28%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(37, 99, 235, 0.24),
      transparent 30%
    ),
    #020617;
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 3rem;
  border: 1px solid rgba(147, 197, 253, 0.22);
  border-radius: 38px;
  background: rgba(255, 255, 255, 0.06);
  box-shadow:
    0 34px 90px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  @media (max-width: 640px) {
    padding: 2rem;
    border-radius: 30px;
  }
`;

const Badge = styled.p`
  width: fit-content;
  margin: 0 0 1.25rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid rgba(147, 197, 253, 0.28);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.1);
  color: #bfdbfe;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  &::before {
    content: "";
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.55rem;
    border-radius: 999px;
    background: #60a5fa;
    box-shadow: 0 0 18px rgba(96, 165, 250, 0.9);
  }
`;

const Title = styled.h2`
  max-width: 980px;
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
`;

const Text = styled.p`
  max-width: 760px;
  margin: 1.5rem 0 0;
  color: #dbeafe;
  font-size: 1.08rem;
  line-height: 1.8;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.article`
  padding: 1.25rem;
  border: 1px solid rgba(147, 197, 253, 0.16);
  border-radius: 22px;
  background: rgba(2, 6, 23, 0.32);
  transition:
    transform 0.22s ease,
    background 0.22s ease,
    border-color 0.22s ease;
  &:hover {
    transform: translateY(-5px);
    background: rgba(2, 6, 23, 0.42);
    border-color: rgba(147, 197, 253, 0.34);
  }
`;

const InfoLabel = styled.p`
  margin: 0 0 0.5rem;
  color: #93c5fd;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const InfoValue = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 900;
  line-height: 1.5;
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
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    background: #eff6ff;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
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
