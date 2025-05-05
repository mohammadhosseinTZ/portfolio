import PerSkills from "./PerSkills";
import loaddingGif from "./icons/loadding.gif"
import phpIcon from "./icons/phpicon.png"
import mysqlIcon from "./icons/mysqlIcon.png"
import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  nextIcon,
  taillwindIcon,
  bootstrapIcon,
  sassIcon,
  reduxIcon,
  gitIcon,
  responsiveIcon,
  typescriptIcon,
  nodejsIcon,
  vueIcon
  
} from "./icons";
export const perSkillsItems = [
  [
    <PerSkills icon={htmlIcon} name={"HTML5"} bg={"rgb(221,75,37)"} />,
    <PerSkills icon={cssIcon} name={"CSS"} bg={"rgb(37,75,221)"} />,
    <PerSkills
      icon={javascriptIcon}
      name={"JAVASCRIPT"}
      bg={"rgb(239,216,29)"}
    />,
    <PerSkills icon={reactIcon} name={"REACT"} bg={"rgb(94,211,243)"} />,
    <PerSkills icon={vueIcon} name={"VUE"} bg={"#3fb27f"} />,
    <PerSkills icon={nextIcon} name={"NEXT.JS"} bg={"rgb(11, 11, 11)"} />,
    <PerSkills icon={taillwindIcon} name={"TAILWIND"} bg={"rgb(73,186,188)"} />,
    <PerSkills
      icon={bootstrapIcon}
      name={"BOOTSTRAP"}
      bg={"rgb(131,17,246)"}
    />,
  ],[
    <PerSkills icon={sassIcon} name={"SASS"} bg={"rgb(204,102,153)"} />,
    <PerSkills icon={reduxIcon} name={"REDUX"} bg={"rgb(114,72,182)"} />,
    <PerSkills icon={gitIcon} name={"GIT"} bg={"rgb(232,78,49)"} />,
    <PerSkills icon={responsiveIcon} name={"RESPONSIVE DESIGN"} bg={"rgb(80,225,197)"} />,
    <PerSkills icon={typescriptIcon} name={"TS"} bg={"#354db8"} />,
    <PerSkills icon={phpIcon} name={"PHP"} bg={"#8c9bd6"} img={true}/>,
    <PerSkills icon={mysqlIcon} name={"PHP"} bg={"#dd8a00"} img={true}/>,
    <PerSkills icon={nodejsIcon} name={"NODE"} bg={"rgb(216,216,216)"} loading={loaddingGif} />
  ]
];
