import React from "react";

import { Circle } from "rc-progress";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextjsIcon from '../../../icons/nextjs.jsx';
// import NoImageIcon from '../../../icons/noImage.jsx';
import TypeScriptIcon from '../../../icons/ts.jsx';

import "./skills.style.scss";

class Skills extends React.Component {
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
                  <Circle percent="20" gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">1</div>
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
                  <Circle percent="20" gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">1</div>
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
                  <Circle percent="20" gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">1</div>
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
                  <Circle percent="20" gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">1</div>
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
                  <Circle percent="20" gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">1</div>
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
                  <Circle percent="20" gapDegree="70" className="circleBar" />
                  <div className="skillDetailBox">
                    <div className="skillLevel">1</div>
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
                  <TypeScriptIcon />
                </div>
                <div className="skillName">TypeScript</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <NextjsIcon className="nextIcon"/>
                </div>
                <div className="skillName">Next.js</div>
              </div>
              <div className="content">
                <div className="contentBox">
                <FontAwesomeIcon icon={["fab", "node"]} />
                </div>
                <div className="skillName">node.js</div>
              </div>
              <div className="content">
                <div className="contentBox noIconBox">
                  <div className="noIcon">No
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
