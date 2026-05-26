"use client";

import styled from "styled-components";
import Reveal from "@/components/Reveal";

export default function Certification() {
  return (
    <CertificationSection id="certification">
      <BackgroundGlow />

      <ContentWrapper>
        <Reveal>
          <TextContent>
            <SectionLabel>Weiterbildung</SectionLabel>

            <Title>
              960 Stunden Coding-Praxis von HTML bis React, Next.js und Backend
              Basics.
            </Title>

            <Description>
              Mein Bootcamp bei neue fische war remote, praxisnah und
              projektorientiert. Neben Frontend-Technologien habe ich dort auch
              gelernt, wie moderne Entwicklungsprozesse funktionieren: Git,
              Testing, Clean Code, Pair Programming und agile Zusammenarbeit.
            </Description>
          </TextContent>
        </Reveal>

        <Reveal delay={160}>
          <CertificateCard>
            <CardTop>
              <CardEyebrow>Certificate</CardEyebrow>
              <CardBadge>Remote Program</CardBadge>
            </CardTop>

            <CardTitle>Web Developer</CardTitle>
            <Provider>neue fische</Provider>

            <MetaGrid>
              <MetaBox>
                <MetaValue>960h</MetaValue>
                <MetaLabel>Programmierpraxis</MetaLabel>
              </MetaBox>

              <MetaBox>
                <MetaValue>01–05</MetaValue>
                <MetaLabel>2026 Zeitraum</MetaLabel>
              </MetaBox>

              <MetaBox>
                <MetaValue>Fullstack</MetaValue>
                <MetaLabel>Curriculum</MetaLabel>
              </MetaBox>
            </MetaGrid>

            <TopicList>
              <Topic>HTML</Topic>
              <Topic>CSS</Topic>
              <Topic>JavaScript</Topic>
              <Topic>React</Topic>
              <Topic>Next.js</Topic>
              <Topic>Node.js</Topic>
              <Topic>REST APIs</Topic>
              <Topic>MongoDB</Topic>
              <Topic>Testing</Topic>
              <Topic>Clean Code</Topic>
              <Topic>Pair Programming</Topic>
              <Topic>Agile Methods</Topic>
              <Topic>UI/UX Basics</Topic>
            </TopicList>
          </CertificateCard>
        </Reveal>
      </ContentWrapper>
    </CertificationSection>
  );
}

const CertificationSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 8vw;
  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(59, 130, 246, 0.24),
      transparent 32%
    ),
    linear-gradient(135deg, #020617 0%, #0f172a 55%, #1e3a8a 100%);
  color: #ffffff;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  right: -10rem;
  top: -10rem;
  width: 30rem;
  height: 30rem;
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.2);
  filter: blur(90px);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
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

const SectionLabel = styled.p`
  width: fit-content;
  margin: 0 0 1.25rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(147, 197, 253, 0.28);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.08);
  color: #bfdbfe;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

const Description = styled.p`
  margin: 1.5rem 0 0;
  color: #dbeafe;
  font-size: 1.08rem;
  line-height: 1.8;
`;

const CertificateCard = styled.article`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  border: 1px solid rgba(147, 197, 253, 0.24);
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 34px 90px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    box-shadow 0.24s ease;
  &::after {
    content: "";
    position: absolute;
    right: -8rem;
    bottom: -8rem;
    width: 18rem;
    height: 18rem;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.22);
    filter: blur(30px);
  }
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.54);
    box-shadow:
      0 42px 110px rgba(0, 0, 0, 0.34),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
`;

const CardTop = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
`;

const CardEyebrow = styled.p`
  margin: 0;
  color: #93c5fd;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const CardBadge = styled.span`
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: #dbeafe;
  font-size: 0.8rem;
  font-weight: 900;
`;

const CardTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin: 1.5rem 0 0;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

const Provider = styled.p`
  position: relative;
  z-index: 1;
  margin: 0.7rem 0 0;
  color: #bfdbfe;
  font-size: 1.1rem;
  font-weight: 900;
`;

const MetaGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MetaBox = styled.div`
  padding: 1rem;
  border: 1px solid rgba(147, 197, 253, 0.18);
  border-radius: 20px;
  background: rgba(2, 6, 23, 0.32);
`;

const MetaValue = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 900;
`;

const MetaLabel = styled.p`
  margin: 0.35rem 0 0;
  color: #bfdbfe;
  font-size: 0.86rem;
  font-weight: 700;
`;

const TopicList = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 2rem;
`;

const Topic = styled.span`
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(147, 197, 253, 0.16);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.12);
  color: #bfdbfe;
  font-size: 0.88rem;
  font-weight: 800;
  transition:
    transform 0.18s ease,
    background 0.18s ease;
  &:hover {
    transform: translateY(-2px);
    background: rgba(147, 197, 253, 0.2);
  }
`;
