import React from "react";
import style from "../../styles/MainComponent.module.css";
import OneProject from "../helper/OneProject";
import tribute from "../../images/prj/tribute.PNG";
import sf from "../../images/prj/survay.PNG";
import pd from "../../images/prj/product.PNG";
import td from "../../images/prj/techDocument.PNG";
import ab from "../../images/prj/contact.PNG";
import qm from "../../images/prj/quote.PNG";
import mdp from "../../images/prj/markdown.PNG";
import dm from "../../images/prj/drum.PNG";
import calc from "../../images/prj/calculator.PNG";
import clk from "../../images/prj/clock.PNG";
import em from "../../images/prj/empMng.png";
import is from "../../images/prj/imageSearch.jpeg";
import mg from "../../images/prj/meme.jpeg";
import gsa from "../../images/prj/gmate.jpeg";
import nmf from "../../images/prj/nutrify.jpeg";
import key from "../../images/prj/pak.png";
import rgb from "../../images/prj/rgbGame.jpeg";
import skg from "../../images/prj/scoreKeeping.jpeg";
import pvone from "../../images/prj/pvone.PNG";

const data = [
  {
    name: "Tribute Page",
    src: tribute,
    details: "Hosted In CodePen, developed with HTML, CSS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/bGRwOwL",
  },
  {
    name: "Portfolio v1",
    src: pvone,
    details: "Hosted In CodePen, developed with HTML, CSS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/xxXaXea",
  },
  {
    name: "Survey Form",
    src: sf,
    details: "Hosted In CodePen, developed with HTML, CSS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/RwLywzY",
  },
  {
    name: "Product Document",
    src: pd,
    details: "Hosted In CodePen, developed with HTML, CSS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/zYEjjzd",
  },
  {
    name: "Technical Documentation",
    src: td,
    details: "Hosted In CodePen, developed with HTML, CSS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/abLazmN",
  },
  {
    name: "Quote Machine",
    src: qm,
    details:
      "Hosted In CodePen, developed with HTML, CSS, JAVASCRIPT, REACT JS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/abLMddY",
  },
  {
    name: "Employee Management",
    src: em,
    details:
      "Code In GitHub, developed with HTML, CSS, JAVASCRIPT, REACT JS, AXIOS.",
    launch: false,
    url: "https://github.com/DhirajB7/UserProjectFrontend",
  },
  {
    name: "Address Book",
    src: ab,
    details:
      "Code In GitHub, developed with HTML, CSS, JAVASCRIPT, REACT JS, AXIOS.",
    launch: false,
    url: "https://github.com/DhirajB7/AddressBook",
  },
  {
    name: "MarkDown Previewer",
    src: mdp,
    details:
      "Hosted In CodePen, developed with HTML, CSS, JAVASCRIPT, REACT JS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/dyZYboo",
  },
  {
    name: "Drum Machine",
    src: dm,
    details:
      "Hosted In CodePen, developed with HTML, CSS, JAVASCRIPT, REACT JS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/VwrvQeL",
  },
  {
    name: "Calculator",
    src: calc,
    details:
      "Hosted In CodePen, developed with HTML, CSS, JAVASCRIPT, REACT JS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/PoOPrJd",
  },
  {
    name: "25 + 5 Clock",
    src: clk,
    details:
      "Hosted In CodePen, developed with HTML, CSS, JAVASCRIPT, REACT JS.",
    launch: true,
    url: "https://codepen.io/DhirajB7/full/JjObYRx",
  },
  {
    name: "Image Search",
    src: is,
    details:
      "Code In GitHub, developed with HTML, CSS, JAVASCRIPT, REACT JS, AXIOS.",
    launch: false,
    url: "https://github.com/DhirajB7/ImageSearch",
  },
  {
    name: "MEME GENERATOR",
    src: mg,
    details:
      "Code In GitHub, developed with HTML, CSS, JAVASCRIPT, REACT JS, AXIOS.",
    launch: false,
    url: "https://github.com/DhirajB7/MemeGenerator",
  },
  {
    name: "GMATE SCORE APP",
    src: gsa,
    details: "Code In GitHub, developed with HTML, CSS, JAVASCRIPT.",
    launch: false,
    url: "https://github.com/DhirajB7/gmate",
  },
  {
    name: "Nutrify Me Frontend",
    src: nmf,
    details:
      "Code In GitHub, developed with HTML, CSS, JAVASCRIPT, REACT JS, AXIOS, SEMANTIC UI.",
    launch: false,
    url: "https://github.com/DhirajB7/NutrifyMeFrontEnd",
  },
  {
    name: "PAT A KEY",
    src: key,
    details: "Code In GitHub, developed with HTML, CSS, JAVASCRIPT.",
    launch: false,
    url: "https://github.com/DhirajB7/Press_A_Key",
  },
  {
    name: "RGB Game",
    src: rgb,
    details: "Code In GitHub, developed with HTML, CSS, JAVASCRIPT.",
    launch: false,
    url: "https://github.com/DhirajB7/fun-RGB-game",
  },
  {
    name: "Score Keeping",
    src: skg,
    details: "Code In GitHub, developed with HTML, CSS, JAVASCRIPT.",
    launch: false,
    url: "https://github.com/DhirajB7/TwoPlayerScoreKeeping",
  },
];

const ProjectComponent = () => {
  return (
    <div className={style.projectComponent}>
      <h3 className={style.projectComponentHthree}>
        These are some of my personal projects
      </h3>
      <div className={style.projectComponentGrid}>
        {data.map((a) => (
          <OneProject key={a.name} {...a} />
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
