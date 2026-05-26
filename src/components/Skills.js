"use client";

import styled from "styled-components";
import { skillGroups } from "@/data/skills";
import Reveal from "@/components/Reveal";

export default function Skills() {
  const mainSkills = ["React", "Next.js", "JavaScript", "Styled Components"];

  return (
    <SkillsSection id="skills">
      <ContentWrapper>
        <Reveal>
          <HeaderGrid>
            <TextContent>
              <SectionLabel>Skills</SectionLabel>

              <Title>
                Mein Tech-Stack ist auf moderne Frontend-Entwicklung
                ausgerichtet.
              </Title>

              <IntroText>
                Ich arbeite mit React, Next.js und JavaScript und bringe dazu
                Erfahrung aus Webprojekten, CMS, SEO und nutzerorientierter
                Umsetzung mit.
              </IntroText>
            </TextContent>

            <StackPreview>
              <PreviewLabel>Current Focus</PreviewLabel>

              <PreviewTitle>Frontend Development</PreviewTitle>

              <MainSkillList>
                {mainSkills.map((skill) => (
                  <MainSkill key={skill}>{skill}</MainSkill>
                ))}
              </MainSkillList>

              <PreviewText>
                Komponentenbasiert, responsive, nutzerfreundlich und sauber
                strukturiert.
              </PreviewText>
            </StackPreview>
          </HeaderGrid>
        </Reveal>

        <SkillsGrid>
          {skillGroups.map((group, index) => (
            <SkillSlot key={group.title}>
              <Reveal delay={index * 120}>
                <SkillCard>
                  <CardNumber>0{index + 1}</CardNumber>
                  <SkillTitle>{group.title}</SkillTitle>

                  <SkillList>
                    {group.skills.map((skill) => (
                      <SkillItem key={skill}>{skill}</SkillItem>
                    ))}
                  </SkillList>
                </SkillCard>
              </Reveal>
            </SkillSlot>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsSection>
  );
}

const SkillsSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 8vw;
  background:
    radial-gradient(
      circle at 15% 15%,
      rgba(37, 99, 235, 0.12),
      transparent 30%
    ),
    #f8fafc;
  color: #0f172a;
`;

const ContentWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 3rem;
  align-items: end;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  max-width: 840px;
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
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

const IntroText = styled.p`
  max-width: 760px;
  margin: 1.5rem 0 0;
  color: #475569;
  font-size: 1.08rem;
  line-height: 1.8;
`;

const StackPreview = styled.article`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 34px;
  background:
    radial-gradient(
      circle at top right,
      rgba(59, 130, 246, 0.24),
      transparent 34%
    ),
    linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e3a8a 100%);
  color: #ffffff;
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.18);
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease;
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.5);
    box-shadow: 0 38px 100px rgba(15, 23, 42, 0.3);
  }
`;

const PreviewLabel = styled.p`
  margin: 0 0 1rem;
  color: #93c5fd;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const PreviewTitle = styled.h3`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
`;

const MainSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.5rem;
`;

const MainSkill = styled.span`
  padding: 0.55rem 0.8rem;
  border: 1px solid rgba(147, 197, 253, 0.18);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.12);
  color: #bfdbfe;
  font-size: 0.9rem;
  font-weight: 900;
`;

const PreviewText = styled.p`
  margin: 1.5rem 0 0;
  color: #dbeafe;
  font-size: 1rem;
  line-height: 1.75;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 3.5rem;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SkillSlot = styled.div``;

const SkillCard = styled.article`
  position: relative;
  overflow: hidden;
  height: 100%;
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
    background: rgba(37, 99, 235, 0.07);
  }
  &:hover {
    transform: translateY(-7px);
    border-color: #bfdbfe;
    box-shadow: 0 32px 80px rgba(15, 23, 42, 0.13);
  }
`;

const CardNumber = styled.p`
  position: relative;
  z-index: 1;
  margin: 0 0 1rem;
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
`;

const SkillTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0 0 1.2rem;
  color: #0f172a;
  font-size: 1.35rem;
  letter-spacing: -0.04em;
`;

const SkillList = styled.ul`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SkillItem = styled.li`
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 0.9rem;
  font-weight: 800;
  transition:
    transform 0.18s ease,
    background 0.18s ease;
  &:hover {
    transform: translateY(-2px);
    background: #dbeafe;
  }
`;
