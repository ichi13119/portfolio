import React from "react";

import { Circle } from "rc-progress";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextjsIcon from '../../../icons/nextjs.jsx';
import TypeScriptIcon from '../../../icons/ts.jsx';
import GolangIconIcon from '../../../icons/golang.jsx';

import "./skills.style.scss";

class Skills extends React.Component {
  constructor() {
    super();

    this.state = {
      html: 10,
      css: 10,
      js: 5,
      react: 5,
      php: 5,
      laravel: 5
    }
  }

  render() {
    return (
      <div className="skillsContainer">
        <div className="skillsBlock">
          <h1 className="pageTitle">
            Skills
            <div className="divine"></div>
          </h1>
          <div className="topics">
            <div className="title">
              <span className="divine">Front End</span>
            </div>
            <div className="details flex">
              <div className="content">
                <div className="contentBox">
                  <Circle percent={this.state.html} gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">{this.state.html}%</div>
                    <FontAwesomeIcon
                      icon={["fab", "html5"]}
                      className="skillIcon"
                    />
                    <div className="skillName">HTML5</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="contentBox">
                  <Circle percent={this.state.css} gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">{this.state.css}%</div>
                    <FontAwesomeIcon
                      icon={["fab", "css3"]}
                      className="skillIcon"
                    />
                    <div className="skillName">CSS3</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="contentBox">
                  <Circle percent={this.state.js} gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">{this.state.js}%</div>
                    <FontAwesomeIcon
                      icon={["fab", "js"]}
                      className="skillIcon"
                    />
                    <div className="skillName">JavaScript</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="contentBox">
                  <Circle percent={this.state.react} gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">{this.state.react}%</div>
                    <FontAwesomeIcon
                      icon={["fab", "react"]}
                      className="skillIcon"
                    />
                    <div className="skillName">React</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title">
              <span className="divine">Back End</span>
            </div>
            <div className="details flex">
            <div className="content">
                <div className="contentBox">
                  <Circle percent={this.state.php} gapDegree="70" className="circleBar back" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">{this.state.php}%</div>
                    <FontAwesomeIcon
                      icon={["fab", "php"]}
                      className="skillIcon"
                    />
                    <div className="skillName">PHP</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="contentBox">
                  <Circle percent={this.state.laravel} gapDegree="70" className="circleBar back" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">{this.state.laravel}%</div>
                    <FontAwesomeIcon
                      icon={["fab", "laravel"]}
                      className="skillIcon"
                    />
                    <div className="skillName">Laravel</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title">
              <span className="divine">Acquires</span>
            </div>
            <div className="details flex acquires">
              <div className="content">
                <div className="contentBox">
                  <TypeScriptIcon className="skillIcon" />
                </div>
                <div className="skillName">TypeScript</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <NextjsIcon className="nextIcon skillIcon"/>
                </div>
                <div className="skillName">Next.js</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <FontAwesomeIcon icon={["fab", "node"]} className="skillIcon" />
                </div>
                <div className="skillName">node.js</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <FontAwesomeIcon icon={["fab", "react"]} className="skillIcon" />
                </div>
                <div className="skillName">React Native</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <FontAwesomeIcon icon={["fab", "aws"]} className="skillIcon" />
                </div>
                <div className="skillName">AWS</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <FontAwesomeIcon icon={["fab", "docker"]} className="skillIcon" />
                </div>
                <div className="skillName">Docker</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <GolangIconIcon className="skillIcon" />
                </div>
                <div className="skillName">Golang</div>
              </div>
              <div className="content">
                <div className="contentBox noIconBox">
                  <div className="noIcon skillIcon">No
                  Icon</div>
                </div>
                <div className="skillName">Three.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
