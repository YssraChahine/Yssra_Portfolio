"use client";

import styled from "styled-components";

export default function ProjectCard({ project, isFeatured }) {
  return (
    <Card $isFeatured={isFeatured}>
      <MockupWindow>
        <MockupTopBar>
          <WindowDots>
            <Dot />
            <Dot />
            <Dot />
          </WindowDots>
          <MockupUrl>
            {project.title.toLowerCase().replaceAll(" ", "-")}.app
          </MockupUrl>
        </MockupTopBar>

        <MockupBody>
          <MockupBadge>{project.type}</MockupBadge>
          <MockupTitle>{project.title}</MockupTitle>

          <MockupLines>
            <MockupLine $width="92%" />
            <MockupLine $width="74%" />
            <MockupLine $width="58%" />
          </MockupLines>

          <MockupChips>
            {project.techStack.slice(0, 3).map((tech) => (
              <MockupChip key={tech}>{tech}</MockupChip>
            ))}
          </MockupChips>
        </MockupBody>
      </MockupWindow>

      <CardContent>
        <CardHeader>
          <ProjectType>{project.type}</ProjectType>
          {isFeatured && <FeaturedBadge>Featured Project</FeaturedBadge>}
        </CardHeader>

        <ProjectTitle>{project.title}</ProjectTitle>

        <Description>{project.description}</Description>

        <TechList>
          {project.techStack.map((tech) => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechList>

        <Divider />

        <HighlightList>
          {project.highlights.map((highlight) => (
            <HighlightItem key={highlight}>{highlight}</HighlightItem>
          ))}
        </HighlightList>

        <ButtonRow>
          {project.liveUrl && (
            <ProjectLink
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </ProjectLink>
          )}

          {project.githubUrl && (
            <SecondaryLink
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </SecondaryLink>
          )}
        </ButtonRow>
      </CardContent>

      <GlowCircle />
    </Card>
  );
}

const Card = styled.article`
  position: relative;
  overflow: hidden;
  min-height: ${({ $isFeatured }) => ($isFeatured ? "620px" : "540px")};
  display: grid;
  grid-template-columns: ${({ $isFeatured }) =>
    $isFeatured ? "0.95fr 1.05fr" : "1fr"};
  gap: ${({ $isFeatured }) => ($isFeatured ? "2rem" : "1.5rem")};
  grid-column: ${({ $isFeatured }) => ($isFeatured ? "span 2" : "span 1")};
  padding: ${({ $isFeatured }) => ($isFeatured ? "2rem" : "1.5rem")};
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 34px;
  background:
    radial-gradient(
      circle at top right,
      rgba(59, 130, 246, 0.28),
      transparent 34%
    ),
    linear-gradient(135deg, #020617 0%, #0f172a 58%, #1e3a8a 100%);
  color: #ffffff;
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.2);
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease;
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.56);
    box-shadow: 0 38px 100px rgba(15, 23, 42, 0.32);
  }
  @media (max-width: 980px) {
    grid-column: span 1;
    grid-template-columns: 1fr;
    min-height: auto;
  }
  @media (max-width: 640px) {
    padding: 1.1rem;
    border-radius: 28px;
  }
`;

const MockupWindow = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  align-self: stretch;
  min-height: 280px;
  border: 1px solid rgba(147, 197, 253, 0.2);
  border-radius: 26px;
  background: rgba(2, 6, 23, 0.55);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 22px 60px rgba(0, 0, 0, 0.22);
`;

const MockupTopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(15, 23, 42, 0.7);
`;

const WindowDots = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const Dot = styled.span`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 999px;
  background: #93c5fd;
  &:nth-child(2) {
    background: #60a5fa;
  }
  &:nth-child(3) {
    background: #2563eb;
  }
`;

const MockupUrl = styled.div`
  overflow: hidden;
  flex: 1;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  color: #94a3b8;
  font-size: 0.82rem;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MockupBody = styled.div`
  min-height: 230px;
  padding: 1.5rem;
  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(96, 165, 250, 0.2),
      transparent 28%
    ),
    rgba(15, 23, 42, 0.44);
`;

const MockupBadge = styled.div`
  width: fit-content;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.12);
  color: #bfdbfe;
  font-size: 0.78rem;
  font-weight: 900;
`;

const MockupTitle = styled.div`
  max-width: 360px;
  margin-top: 1.4rem;
  color: #ffffff;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.06em;
`;

const MockupLines = styled.div`
  display: grid;
  gap: 0.65rem;
  margin-top: 1.5rem;
`;

const MockupLine = styled.div`
  width: ${({ $width }) => $width};
  height: 0.75rem;
  border-radius: 999px;
  background: rgba(226, 232, 240, 0.16);
`;

const MockupChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.5rem;
`;

const MockupChip = styled.span`
  padding: 0.45rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #dbeafe;
  font-size: 0.78rem;
  font-weight: 900;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
`;

const ProjectType = styled.p`
  margin: 0;
  color: #93c5fd;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const FeaturedBadge = styled.span`
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: #dbeafe;
  font-size: 0.8rem;
  font-weight: 900;
`;

const ProjectTitle = styled.h3`
  max-width: 760px;
  margin: 1.5rem 0 0;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.065em;
`;

const Description = styled.p`
  max-width: 780px;
  margin: 1.2rem 0 0;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.8;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 1.7rem 0 0;
  padding: 0;
  list-style: none;
`;

const TechItem = styled.li`
  padding: 0.48rem 0.78rem;
  border: 1px solid rgba(147, 197, 253, 0.16);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.12);
  color: #bfdbfe;
  font-size: 0.86rem;
  font-weight: 800;
  transition:
    transform 0.18s ease,
    background 0.18s ease;
  &:hover {
    transform: translateY(-2px);
    background: rgba(147, 197, 253, 0.2);
  }
`;

const Divider = styled.div`
  height: 1px;
  margin: 1.8rem 0;
  background: rgba(255, 255, 255, 0.12);
`;

const HighlightList = styled.ul`
  display: grid;
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #e2e8f0;
`;

const HighlightItem = styled.li`
  position: relative;
  padding-left: 1.6rem;
  line-height: 1.65;
  &::before {
    content: "↳";
    position: absolute;
    left: 0;
    color: #93c5fd;
    font-weight: 900;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 2rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 1.1rem;
  border-radius: 999px;
  background: #ffffff;
  color: #0f172a;
  font-weight: 900;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    background: #eff6ff;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.24);
  }
`;

const SecondaryLink = styled(ProjectLink)`
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: transparent;
  color: #ffffff;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const GlowCircle = styled.div`
  position: absolute;
  right: -7rem;
  bottom: -7rem;
  width: 18rem;
  height: 18rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.22);
  filter: blur(30px);
`;
