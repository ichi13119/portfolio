import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Histories from "./histories/histories.component";
import Personalities from "./personalities/personalities.component";

import './about.style.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="tab"
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


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

  let fadeConts = document.querySelectorAll('.fadeConts'); // フェードさせる要素の取得
let fadeContsRect = []; // 要素の位置を取得するための配列
let fadeContsTop = []; // 要素の位置を取得するための配列
let windowY = window.pageYOffset; // ウィンドウのスクロール位置
let windowH = window.innerHeight; // ウィンドウの高さ
let remainder = 100; // ちょっとはみ出させる部分
// 要素の位置を取得
for (let i = 0; i < fadeConts.length; i++) {
  fadeContsRect.push(fadeConts[i].getBoundingClientRect());
}
for (let i = 0; i < fadeContsRect.length; i++) {
  fadeContsTop.push(fadeContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  
  for (let i = 0; i < fadeConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      // .showを付与
      fadeConts[i].classList.add('show');
    } else {
      // 逆に.showを削除
      fadeConts[i].classList.remove('show');
    }
  }
});
  
  return (
    <div className="aboutContainer">
      <div className="aboutBlock">
        <h1 className='pageTitle title'>
          about me
        <div className="divine"></div>
        </h1>
        <div className="topics">
          <div className="title">
            <span className="divine">Goal in life</span>
          </div>
          <div className="details">
            <p className="goal">自身の能力を最大化し、最高のパフォーマンスを発揮する</p>
          </div>
        </div>
        <div className="basics">
          {/* <img></img> */}
          <p></p>
        </div>
      </div>
      <div className={classes.root}>
        {/* <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
          className="tabs">
            
            <Tab label="Works" {...a11yProps(0)} />
            <Tab label="Personalities" {...a11yProps(1)} />
            <Tab label="Histories" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}> */}
          <Histories />
          <Personalities />
          {/* <Works /> */}
        {/* </TabPanel>
        <TabPanel value={value} index={1}> */}
        {/* </TabPanel>
        <TabPanel value={value} index={2}> */}
        {/* </TabPanel> */}
      </div>
    </div>
  );
}

// class About extends React.Component {

//   render() {
//     return(
//       <div className="aboutContainer">
//         <div className="block">
//           <p>about me</p>
//           <div className="basics">
//             <img></img>
//             <p></p>
//           </div>
//         </div>

//       </div>
//     )
//   }
// };

// export default About;
