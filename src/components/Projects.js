"use client";

import styled from "styled-components";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <ContentWrapper>
        <Reveal>
          <HeaderGrid>
            <TextContent>
              <SectionLabel>Projekte</SectionLabel>

              <Title>
                Projekte, die zeigen, wie ich React, APIs und UI-Struktur
                zusammenbringe.
              </Title>
            </TextContent>

            <IntroText>
              Ich baue Projekte nicht nur, damit sie funktionieren. Ich achte
              auf Struktur, Nutzerführung, wiederverwendbare Komponenten und
              eine saubere technische Umsetzung.
            </IntroText>
          </HeaderGrid>
        </Reveal>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectSlot key={project.title} $isFeatured={index === 0}>
              <Reveal delay={index * 120}>
                <ProjectCard project={project} isFeatured={index === 0} />
              </Reveal>
            </ProjectSlot>
          ))}
        </ProjectGrid>
      </ContentWrapper>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 8vw;
  background:
    radial-gradient(
      circle at 85% 10%,
      rgba(37, 99, 235, 0.12),
      transparent 30%
    ),
    #ffffff;
  color: #0f172a;
`;

const ContentWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: end;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TextContent = styled.div``;

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
  max-width: 900px;
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

const IntroText = styled.p`
  margin: 0;
  color: #475569;
  font-size: 1.08rem;
  line-height: 1.8;
  @media (max-width: 900px) {
    max-width: 760px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 3.5rem;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectSlot = styled.div`
  grid-column: ${({ $isFeatured }) => ($isFeatured ? "span 2" : "span 1")};
  @media (max-width: 980px) {
    grid-column: span 1;
  }
`;
