"use client";

import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <BrandBlock>
          <Logo>Yssra Chahine</Logo>
          <Tagline>
            Junior Frontend Developer · React · Next.js · JavaScript
          </Tagline>
        </BrandBlock>

        <FooterLinks>
          <FooterLink href="#projects">Projekte</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink
            href="https://github.com/YssraChahine"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/yssra-chahine-3b34b8209"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </FooterLink>
          <FooterLink href="mailto:chahine@live.de">E-Mail</FooterLink>
        </FooterLinks>
      </FooterContent>

      <BottomBar>
        <FooterText>
          © 2026 Yssra Chahine. Built with Next.js, React and styled-components.
        </FooterText>

        <StatusBadge>Open to Junior Frontend roles</StatusBadge>
      </BottomBar>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 3rem 8vw 2rem;
  background:
    radial-gradient(
      circle at top right,
      rgba(37, 99, 235, 0.14),
      transparent 30%
    ),
    #020617;
  color: #cbd5e1;
`;

const FooterContent = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const BrandBlock = styled.div`
  max-width: 420px;
`;

const Logo = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: -0.04em;
`;

const Tagline = styled.p`
  margin: 0.7rem 0 0;
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.7;
`;

const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.85rem;
  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`;

const FooterLink = styled.a`
  padding: 0.55rem 0.75rem;
  border-radius: 999px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }
`;

const BottomBar = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterText = styled.p`
  margin: 0;
  color: #94a3b8;
  font-size: 0.92rem;
  line-height: 1.6;
`;

const StatusBadge = styled.span`
  padding: 0.55rem 0.8rem;
  border: 1px solid rgba(147, 197, 253, 0.18);
  border-radius: 999px;
  background: rgba(147, 197, 253, 0.1);
  color: #bfdbfe;
  font-size: 0.85rem;
  font-weight: 900;
`;
