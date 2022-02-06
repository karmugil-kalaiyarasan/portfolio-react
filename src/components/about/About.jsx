import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./about.css";
import Pic1 from "../../image/pic1.jpg";
import Html from "../../image/html.svg";
import Css from "../../image/css.svg";
import Sass from "../../image/sass.svg";
import Javascript from "../../image/javascript.svg";
import Reactpic from "../../image/react.svg";
import Api from "../../image/api.svg";
import Git from "../../image/git.svg";
import Firebase from "../../image/firebase.svg";
import Vscode from "../../image/vscode.svg";
import Nodejs from "../../image/nodejs.svg";
import Npm from "../../image/npm.svg";
import Expressjs from "../../image/express.svg";
import Bootstrap from "../../image/bootstrap-5-1.svg";
import Styled from "../../image/styled-components-1.svg";
import Material from "../../image/material-ui-1.svg";
import Solidity from "../../image/solidity.svg";
import Truffle from "../../image/truffle.png";
import Ganache from "../../image/ganache.png";
import Metamask from "../../image/metamask1.svg";
import Docker from "../../image/docker.svg";
import Mongo from "../../image/mongodb.svg";
import Mysql from "../../image/mysql.svg";
import Linux from "../../image/linux.svg";
import Oracle from "../../image/oracle.svg";
import Ethereum from "../../image/ethereum.svg";

const About = () => {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkmode;

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Pic1} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a Full-Stack developer based on Toronto, Canada. I love writing
          clean code and pushing my skills to the limit. My interests include
          joining an exciting team of passionate people, personal growth, and
          explore new technologies.
        </p>
        <p className="a-desc">
          There is no greater feeling than creating a full-stack web application
          using MERN stack. When I'm not creating web application I love to get
          lost in Blockchain. It is always fun to create Smart Contracts, ERC
          tokens, deploy it on test blockchain networks and once again using
          React along with web3 to create a Decentralised Application.
        </p>
        <h1 className="a-title check">Skills</h1>
        <div
          style={{ backgroundColor: darkMode && "#222" }}
          className="skillsContainer sectionContainer"
        >
          <ul className="SkillsGrid">
            <li>
              <div className="itemContainer"></div>
              <img src={Html} />
              <p>HTML</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Css} />
              <p>CSS</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Bootstrap} />
              <p>BOOTSTRAP5</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Styled} />
              <p>STYLEDCOMPONENTS</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Material} />
              <p>MATERIALUI</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Sass} />
              <p>SASS</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Javascript} />
              <p>JAVASCRIPT</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Npm} />
              <p>NPM</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Reactpic} />
              <p>REACT</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Nodejs} />
              <p>NODEJS</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Expressjs} />
              <p>EXPRESSJS</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Api} />
              <p>REST API</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Mongo} width="50px" height="50px" />
              <p>MONGODB</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Mysql} width="50px" height="50px" />
              <p>MYSQL</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Oracle} width="50px" height="50px" />
              <p>ORACLE</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Solidity} />
              <p>SOLIDITY</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Truffle} width="50px" height="50px" />
              <p>TRUFFLE</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Ganache} width="50px" height="50px" />
              <p>GANACHE</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Ethereum} width="50px" height="50px" />
              <p>ETHEREUM</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Metamask} width="50px" height="50px" />
              <p>METAMASK</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Docker} width="50px" height="50px" />
              <p>DOCKER</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Linux} width="50px" height="50px" />
              <p>LINUX</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Git} />
              <p>GIT</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Firebase} />
              <p>FIREBASE</p>
            </li>
            <li>
              <div className="itemContainer"></div>
              <img src={Vscode} />
              <p>VSCODE</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
