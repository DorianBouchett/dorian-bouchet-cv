import * as React from "react"
import { PageProps } from "gatsby"
import List from "../components/List"
import Title1 from "../components/Title1"
import Title2 from "../components/Title2"
import ImageAndText from "../components/ImageAndText"
import DiplomaImageAndText from "../components/DiplomaImageAndText"
import Footer from "../components/Footer"
import TitleAndText from "../components/TitleAndText"
import ImageAndText2 from "../components/ImageAndText2"
import Header from "../components/Header"
import Quote from "../components/Quote"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <React.Fragment>
    <Header
      h1={"Hi, I'm Dorian,"}
      h2={"a 26-year-old French, based in Zurich since 2018."}
      h3={"React enthusiast"}
      h4={"3-year experience in Front-end Development with a focus on React"}
      img={""}
      svgOn={true}
    />
    {/*add an hover effect (Github-like)*/}

    <Quote quote={"Zurich-based developer with 3-year experience in React looking for a full-time position as a Professional Front-end Engineer"} theme={"white"}/>

    <Title1 title={"Education"} subtitle={"Computer Sciences"} />

    <List title={''}>
      <DiplomaImageAndText
        degree={"Master’s Degree"}
        department={"Department of Computer Sciences\n" +
      "at CPE Lyon, France (2018)"}
        majors={"Computer Sciences"}
        minors={"Management, Economics, Mathematics"} />
      <DiplomaImageAndText
        degree={"Bachelor’s Degree"}
        department={"Department of Computer Sciences\n" +
      "at CPE Lyon, France (2016)"}
        majors={"Computer Sciences, Mathematics"}
        minors={"Quantum Physics, Electronics"} />
    </List>

    <Title1
      title={"Work experience"}
      subtitle={"Recap of my 4-year experience"} />

    <Title2
      title={"TI&M (3 years)"}
      subtitle={"After my time in Japan I wanted to continue working abroad.\n" +
    "As I could speak German, Zurich was the right fit for me.\n" +
    "At Ti8m, I perfected my coding skils and more specifically my React skills.\n" +
    "Ti&m sets really high standards in code quality and that helped me improve massively."} date={"Sept. 2018 - Present"} location={"Zurich, Switzerland"} flag={"🇨🇭"}/>

    <List title={'Projects'}>
      <ImageAndText
        img={""}
        title={"Ti&m website"}
        subtitle={"Development of the corporate website www.ti8m.ch"}
        text={"Technologies | Magnolia CMS, Javascript, jQuey, HMTL, SASS, CSS Grid, i18n"}
        timeframe={"Apr. 2021 – Present"}/>

      <ImageAndText
        img={""}
        title={"Basler Kantonalbank (BKB)"}
        subtitle={"Support and update of a customer portal for bank www.bkb.ch"}
        text={"Technologies | AngularJS, Gradle, Docker, @material-ui, i18n, Jest, Webpack, JSPM"}
        timeframe={"Jan. - Mar. 2021"}/>

      <ImageAndText
        img={""}
        title={"Swiss Health Information Processing (SHIP)"}
        subtitle={"Development of the SHIP Webapp"}
        text={"Technologies | React, Redux, Selectors, Saga, React hooks, Java, xQuery, existDB, Typescript, Gradle, Docker, @material-ui, i18n, Enzyme, Webpack"}
        timeframe={"Jun. – Nov. 2020"}/>

      <ImageAndText
        img={""}
        title={"Bank CLER"}
        subtitle={"Support for Bank CLER www.cler.ch"}
        text={"Technologies | AngularJS, Gradle, Docker, @material-ui, i18n, Jest, Webpack, JSPM"}
        timeframe={"Apr. – Jun. 2020"}/>

      <ImageAndText
        img={""}
        title={"External consultant at SIX Payment Services"}
        subtitle={"Implementation of a  Merchant Webapp, based on React.\n" +
        "\n" +
        "Development of the SIX Customer Onboarding Webapp, based on AngularJS."}
        text={"Technologies | React, Redux, Sagas, React hooks, AngularJS, Java, Spring, Gradle, Docker, @material-ui, i18n, Jest, Webpack, mySQL, Oracle"}
        timeframe={"Apr. 2019 – Apr. 2020"}/>

      <ImageAndText
        img={""}
        title={"Aargauische Kantonalbank (AKB)"}
        subtitle={"Support and update of AKB’s website, based on Liferay and AngularJS www.akb.ch."}
        text={"Technologies | Java, Spring, Gradle, Docker, i18n, YML templates, mySQL, Oracle"}
        timeframe={"Feb. – Mar. 2019"}/>

      <ImageAndText
        img={""}
        title={"Luzerner Kantonalbank (LuKB)"}
        subtitle={"Development of LukB’s website, based on Liferay and React www.lukb.ch."}
        text={"Technologies | React, Redux, Sagas, React hooks, i18n, Jest, Webpack"}
        timeframe={"Sept. – Dec. 2018"}/>
    </List>

    <Title2
      title={"PLEN Robotics Inc. (6 months)"}
      subtitle={"I was lucky enough to take Japanese classes in school. That’s how I found a job in Osaka, Japan.\n" +
      "I really enjoyed my time at PLEN Robotics Inc.\n" +
      "I learned the Japanese values of work there.\n" +
      "This experience helps me in stressful situations where you need to double down on work."}
      date={"Feb. - Aug. 2018"}
      location={"Osaka, Japan"}
      flag={"🇯🇵"}
    />

    <List title={"Projects"}>
      <ImageAndText
      img={""}
      title={"PLEN Robotics Inc."}
      subtitle={"Development of the PLEN Cube’s official webapp to remotely control the robot."}
      text={"Technologies | React, Redux, Webpack, Google Material"}
      timeframe={"Jun. – Aug. 2018"} />

      <ImageAndText
      img={""}
      title={"PLEN Robotics Inc."}
      subtitle={"Integration of a music streaming API into the PLEN Cube."}
      text={"Technologies | Python, Swagger, Auth Tokens"}
      timeframe={"Feb. – May 2018"} />

    </List>

    <Title2
      title={"Selectra (3 months)"}
      subtitle={"Selectra was my first real job as a developer and also the first time I worked abroad. I had the chance to have a really good supervisor who taughed me a lot about good practises in coding."}
      date={"June. - Sept. 2017"}
      location={"Madrid, Spain"}
      flag={"🇪🇸"}
    />

    <List title={"Projects"}>
      <ImageAndText
        img={""}
        title={"SQL database"}
        subtitle={"Development of a MySQL database management utility tool using PHP."}
        text={"Technologies | PHP, Object-oriented programming, Laravel 5, MySQL, Swagger"}
        timeframe={"Jun. – Sept. 2017"} />
    </List>

    <Title1
      title={"Personnal projects (3 months)"}
      subtitle="Other projects I had the opportunity to work on."
    />

    <List title={"Projects"}>
      <ImageAndText
        img={""}
        title={"Shopping website"}
        subtitle={"Development of a shopping website. See video"}
        text={"Technologies | React, NodeJS, MangoDB"}
        timeframe={"Dec. 2017"} />

      <ImageAndText
        img={""}
        title={"Powerpoint-like website"}
        subtitle={"Development of a webapp to share a diaporama with broadcasting functionnalities. See video."}
        text={"Technologies | React, NodeJS, socket.io"}
        timeframe={"Oct. 2017"} />

      <ImageAndText
        img={""}
        title={"Dyfact (DJ)"}
        subtitle={"Development, hosting and maintenance of the official website www.dyfact.com."}
        text={"echnologies | React, Gatsby, OVH"}
        timeframe={"October 2015"} />
    </List>

    <Quote quote={"I am mainly a React developer but I also have experience in AngularJS as well as back-end tech including Java and databases such as MySQL."} theme={"dark"}/>

    <Title1
      title={"Skills"}
      subtitle={"What I can do"}
    />

    <List>
      <TitleAndText
        title={"Programming languages & libraries"}
        content={"React incl. React Hooks, Sagas, Redux, Selectors, Reducers\n" +
        "AngularJS (v1)\n" +
        "NodeJS (Express)\n" +
        "Javascript & Typescript\n" +
        "jQuery\n" +
        "Java on Spring\n" +
        "PHP (Laravel)"} />
      <TitleAndText
        title={"Other"}
        content={"HTML\n" +
        "CSS, Grid, Flexbox\n" +
        "SCSS / SASS\n" +
        "Advanced CSS Animations\n" +
        "Magnolia CMS\n" +
        "YAML Templates\n" +
        "Jest\n" +
        "Enzyme"} />
      <TitleAndText
        title={"Database"}
        content={"MySQL\n" +
        "NoSQL\n" +
        "MongoDB\n" +
        "Oracle"} />
      <TitleAndText
        title={"Tools"}
        content={"Docker\n" +
        "Git\n" +
        "Postman\n" +
        "Webpack\n" +
        "Yarn\n" +
        "Maven\n" +
        "Vagrant\n" +
        "Gradle\n" +
        "i18n / i10n"} />
      <TitleAndText
        title={"Miscelanious"}
        content={"Agile methodology\n" +
        "Jira\n" +
        "Github / Gitlab\n" +
        "AWS\n" +
        "Firebase\n" +
        "VIM"} />
    </List>

    <Title1
      title={"Extra-curricular skills"}
      subtitle={"My life outside of work."}
    />

    <List>
      <ImageAndText2
        content={"test"}
      />

      <ImageAndText2
        content={"test"}
      />
    </List>

    <Footer
      img={""}
      email={""}
      phone={""}
    />

  </React.Fragment>
)

export default IndexPage
