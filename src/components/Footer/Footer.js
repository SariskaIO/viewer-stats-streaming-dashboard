
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.sariska.io">
              SARISKA
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.sariska.io/about-us">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://blog.sariska.io/">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.sariska.io/"
            target="_blank"
          >
            SARISKA
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
