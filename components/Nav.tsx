import Link from "next/link";
import styled from "@emotion/styled";

export default function Nav() {
  const navLinks = [
    { id: 1, title: "Home", pathname: "/" },
    { id: 2, title: "Page", pathname: "/Page" },
    { id: 3, title: "Example", pathname: "/Example" },
  ];

  return (
    <Header>
      <Link className={"logo"} href="/">
        어수선해
      </Link>
      <nav>
        <NavList>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link href={nav.pathname}>{nav.title}</Link>
            </li>
          ))}
        </NavList>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 1rem;
  background-color: var(--theme-bg);
  color: var(--theme-color);
  > .logo {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`;
