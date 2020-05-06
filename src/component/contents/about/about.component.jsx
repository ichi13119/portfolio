import React from "react";
import { makeStyles } from '@material-ui/core/styles';

// import Histories from "./histories/histories.component";
import Personalities from "./personalities/personalities.component";

import './about.style.scss';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    color: '06F',
    textAlign: "center",
  }
});

export default function About() {
  const classes = useStyles();
  
  return (
    <div className="aboutContainer">
      <div className="aboutBlock">
        <h1 className='pageTitle title'>
          about me
        <div className="divine"></div>
        </h1>
        <div className="topics">
          <div className="title">
            <span className="divine">Achieve in life</span>
          </div>
          <div className="details">
            <p className="achieve">自身の能力を最大化し、最高のパフォーマンスを発揮する</p>
          </div>
        </div>
        <div className="basics">
          <img src="../../../MY_IMAGE.jpg" alt="profile_photo" className='image'/>
          <div className='introContainer'>
            <div className='introduction divine'>Introduction</div>
            <p className='text'>- Shu Ichihara</p>
            <p className='text'>- Japan,Tokyo</p>
            <p className='text'>- 小学生から今までバスケを一番に生きてきた凡人</p>
            <p className='text'>- デジタルコンテンツやアーティスティックな感じが好きで、フロントエンドでそんな表現をしたいと思いつつ、バックエンドやインフラもできるようになりたい少し欲張りな人間</p>
            <p className='text'>- 成長して何かを達成できるようになることにモチベーションを感じるタイプのため、単調作業にはあまり向かないと感じる</p>
          </div>
        </div>
      </div>
      <div className={classes.root}>
          {/* <Histories /> */}
          <Personalities />
      </div>
    </div>
  );
}