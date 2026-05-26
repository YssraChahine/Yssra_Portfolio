"use client";

import { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <HeaderWrapper>
      <Logo href="#top" onClick={closeMenu}>
        Yssra Chahine
      </Logo>

      <DesktopNav>
        <NavLink href="#about">Über mich</NavLink>
        <NavLink href="#projects">Projekte</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#certification">Bootcamp</NavLink>
        <ContactLink href="#contact">Kontakt</ContactLink>
      </DesktopNav>

      <MenuButton
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
      >
        {isMenuOpen ? "Schließen" : "Menü"}
      </MenuButton>

      {isMenuOpen && (
        <MobileNav>
          <MobileNavLink href="#about" onClick={closeMenu}>
            Über mich
          </MobileNavLink>
          <MobileNavLink href="#projects" onClick={closeMenu}>
            Projekte
          </MobileNavLink>
          <MobileNavLink href="#skills" onClick={closeMenu}>
            Skills
          </MobileNavLink>
          <MobileNavLink href="#certification" onClick={closeMenu}>
            Bootcamp
          </MobileNavLink>
          <MobileContactLink href="#contact" onClick={closeMenu}>
            Kontakt
          </MobileContactLink>
        </MobileNav>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.15rem 8vw;
  background: rgba(15, 23, 42, 0.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Logo = styled.a`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    color 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    color: #bfdbfe;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  @media (max-width: 820px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: #cbd5e1;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.35rem;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: #93c5fd;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease;
  }
  &:hover {
    color: #ffffff;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const ContactLink = styled(NavLink)`
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);
  &::after {
    display: none;
  }
  &:hover {
    color: #0f172a;
    transform: translateY(-2px);
    background: #eff6ff;
  }
`;

const MenuButton = styled.button`
  display: none;
  min-height: 42px;
  padding: 0 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.42);
  }
  @media (max-width: 820px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNav = styled.nav`
  position: absolute;
  top: 74px;
  left: 8vw;
  right: 8vw;
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.97);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
`;

const MobileNavLink = styled.a`
  padding: 0.9rem 1rem;
  border-radius: 16px;
  color: #ffffff;
  font-weight: 800;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  &:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const MobileContactLink = styled(MobileNavLink)`
  background: #ffffff;
  color: #0f172a;
  &:hover {
    background: #eff6ff;
  }
`;
