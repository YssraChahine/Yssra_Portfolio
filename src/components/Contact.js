"use client";

import styled from "styled-components";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContentWrapper>
        <Reveal>
          <SectionLabel>Kontakt</SectionLabel>

          <Title>Bereit für meine erste Junior Frontend Rolle.</Title>

          <Description>
            Ich suche eine Junior Frontend Developer Position mit Fokus auf
            React, Next.js und moderne Webentwicklung, am liebsten remote oder
            hybrid in Hamburg/Berlin.
          </Description>
        </Reveal>

        <ContactGrid>
          <ContactSlot>
            <Reveal delay={100}>
              <ContactCard>
                <CardLabel>E-Mail</CardLabel>
                <ContactLink href="mailto:chahine@live.de">
                  chahine@live.de
                </ContactLink>
              </ContactCard>
            </Reveal>
          </ContactSlot>

          <ContactSlot>
            <Reveal delay={180}>
              <ContactCard>
                <CardLabel>LinkedIn</CardLabel>
                <ContactLink
                  href="https://www.linkedin.com/in/yssra-chahine-3b34b8209"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profil
                </ContactLink>
              </ContactCard>
            </Reveal>
          </ContactSlot>

          <ContactSlot>
            <Reveal delay={260}>
              <ContactCard>
                <CardLabel>GitHub</CardLabel>
                <ContactLink
                  href="https://github.com/YssraChahine"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profil
                </ContactLink>
              </ContactCard>
            </Reveal>
          </ContactSlot>
        </ContactGrid>

        <Reveal delay={320}>
          <ButtonRow>
            <PrimaryLink href="mailto:chahine@live.de">
              E-Mail schreiben
            </PrimaryLink>

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
    </ContactSection>
  );
}

const ContactSection = styled.section`
  padding: 7rem 8vw;
  background:
    radial-gradient(
      circle at top left,
      rgba(147, 197, 253, 0.28),
      transparent 34%
    ),
    linear-gradient(135deg, #1d4ed8 0%, #0f172a 70%);
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  width: fit-content;
  margin: 0 0 1.25rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(147, 197, 253, 0.28);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.1);
  color: #bfdbfe;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  max-width: 900px;
  margin: 0;
  font-size: clamp(2.3rem, 6vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
`;

const Description = styled.p`
  max-width: 760px;
  margin: 1.5rem 0 0;
  color: #dbeafe;
  font-size: 1.12rem;
  line-height: 1.8;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 3rem;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const ContactSlot = styled.div``;

const ContactCard = styled.article`
  height: 100%;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
  transition:
    transform 0.22s ease,
    background 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;
  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.36);
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
  }
`;

const CardLabel = styled.p`
  margin: 0 0 0.5rem;
  color: #bfdbfe;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ContactLink = styled.a`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 900;
  text-decoration: none;
  word-break: break-word;
  &:hover {
    text-decoration: underline;
  }
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
  min-height: 48px;
  padding: 0 1.25rem;
  border-radius: 999px;
  background: #ffffff;
  color: #0f172a;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    background: #eff6ff;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
  }
`;

const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.45);
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
