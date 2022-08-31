import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
export default function Header() {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sn">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
        </nav>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${getNavLinkClass("/")}`}>
              <Button className="nav-link" type="link" href="/">
                Home
              </Button>
            </li>
            <li className='{`nav-item${getNavLinkClass("/")}`}'>
              <Button className="nav-link" type="link" href="/browse-by">
                Browse by
              </Button>
            </li>
            <li className='{`nav-item${getNavLinkClass("/")}`}'>
              <Button className="nav-link" type="link" href="/stories">
                Stories
              </Button>
            </li>
            <li className='{`nav-item${getNavLinkClass("/")}`}'>
              <Button className="nav-link" type="link" href="/agents">
                Agents
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
