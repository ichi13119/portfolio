import React from "react";
import { Line } from "rc-progress";

import "./personalities.style.scss";

class Personalities extends React.Component {
  render() {
    return (
      <div className="personContainer">
        {/* <div className="topics">
          <div className="title">
            <p>Likes</p>
          </div>
          <div className="details">
            <ul>
              <li>バスケットボール</li>
              <li>スノーボード</li>
              <li>カラオケ</li>
              <li>ドライブ</li>
            </ul>
          </div>
        </div>

        <div className="topics">
          <div className="title">
            <p>Refers</p>
          </div>
          <div className="details">
            <p></p>
          </div>
        </div> */}

        <div className="topics">
          <div className="title">
            <span className="divine">Insight</span>
            </div>
          <div className="container">
            <div className="details">
              <span className="subtitle divine-thin">BIG5テスト</span>
              <div className="content">
                <div className="heading">
                  外向性
                  <span>14/30点</span>
                </div>
                <div className="bar">
                  <Line percent="47" strokeLinecap="square" />
                </div>
              </div>
              <div className="content">
                <div className="heading">
                  情緒安定性
                  <span>24/30点</span>
                </div>
                <div className="bar">
                  <Line percent="80" strokeLinecap="square" />
                </div>
              </div>
              <div className="content">
                <div className="heading">
                  誠実性
                  <span>24/30点</span>
                </div>
                <div className="bar">
                  <Line percent="80" strokeLinecap="square" />
                </div>
              </div>
              <div className="content">
                <div className="heading">
                  協調性
                  <span>16/30点</span>
                </div>
                <div className="bar">
                  <Line percent="53" strokeLinecap="square" />
                </div>
              </div>
              <div className="content">
                <div className="heading">
                  開放性
                  <span>20/30点</span>
                </div>
                <div className="bar">
                  <Line percent="67" strokeLinecap="square" />
                </div>
              </div>
            </div>
            <div className="details fadeConts">
            <span className="subtitle divine-thin">クリフトンストレングスTOP5</span>
              <ul className="content">
                <li className="heading spacing">1.慎重さ</li>
                <li className="heading spacing">2.分析思考</li>
                <li className="heading spacing">3.調和性</li>
                <li className="heading spacing">4.責任感</li>
                <li className="heading spacing">5.親密性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personalities;
