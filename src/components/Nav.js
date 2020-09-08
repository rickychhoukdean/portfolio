import React from 'react';
import { Link } from 'gatsby';
import Scroll from './Scroll';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Scroll type="id" element="about-section">
                  <a href="#about-section" className="more">
                    About
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="project-section">
                  <a href="#project-section" className="more">
                    Projects
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <a
                  className="ntext nav-link"
                  href="https://resume.creddle.io/resume/7hk5dhz1slo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            ></a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
