import React from 'react';
import Card from './components/Card';
import './App.css';
import Snowflake from './components/Snowflake';
import headerImg from './assets/images/header.png';
import profileImg from './assets/images/profile.png';
import sraaImg from './assets/images/sraa.png';
import idmImg from './assets/images/idontmind.png';
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

const coursework = [
  "Programming Languages",
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Architecture",
  "Computer Networking",
  "Machine Learning",
  "Software Construction",
  "Automata Theory",
];

// image credits: https://pin.it/3eqfnYNOj
// falling snow credits: https://youtu.be/SrHoCz1Pwa8?si=vCELeLNWg2XLeaUG

class App extends React.Component {
 snow = () => {
  return Array.from({ length: 100 }).map((_, i) => {
    const animationDelay = `${(Math.random() * 10).toFixed(2)}s`;
    const fontSize = `${(Math.random() * 30 + 10).toFixed(0)}px`;
    const left = `${Math.random() * 100}vw`;

    const style = {
      animationDelay,
      fontSize,
      left,
      top: 0,
      position: 'absolute',
    };

    return <Snowflake key={i} id={i} style={style} />;
  });
};

     render() {
      return(
        <div className='App'>
               {this.snow()}
      
        <div className='Container'>
          <div className='NavBar' >
          <p className='MyName'>Angela Tan</p>
        </div>
        <p style={{color:"rgb(8, 79, 117)"}}> welcome to my website ☁️ </p>
    
        <div className="Header">
          <img src={headerImg} alt="Header" className="header-image" />
        </div>
     
        <div className ="BottomSection">

        <div>
          <p className="header-title"> Experience </p>
          <div style={{paddingRight: '8%'}}>
              <Card
              company="Walmart Global Tech"
              roles={[
              {
              title: "Software Engineer Intern",
              date: "June '25 - Aug '25",
              description: "Working on the Walmart Seller App (4.8 on the App Store!) Learned about Android Development + Kotlin, MVVM+C architecture, and navigating large intermodular codebases."
              }]}
              />
               <Card
              company="Northrop Grumman"
              roles={[
              {
              title:"Software Engineer Intern",
              date:"June '24 - Aug '24",
              description:"Developed unit tests in C++ and MATLAB for flight navigation software. Wrote scripts for efficient and reproduceable testing."
              } ]}/>

              <Card
              company="LA Blueprint, Tech for Social Good"
              roles={[
                {
                title: "IDONTMIND Developer",
                date: "Nov '23 - July '24",
                description: "Developed a React Native app for mental health check-ins, daily journaling, and displaying health metrics."
                },
                {
                title: "SRAA Developer",
                date: "Nov '22 - July '23",
                description: "Built a React Native app for the Skid Row Arts Alliance nonprofit supporting an artwork gallery, local event information on a map, and magazine issues."
                }
              ]}/>

               <Card
              company="The Daily Bruin"
              roles={[
                {
                title: "Software Engineer Intern",
                date: "Nov '22 - June '23",
                description: "Developed flatpages to support UCLA's 100+ years old newspaper."
                }
              ]}/>
          </div>
        
        <p className="header-title"> Projects</p>
        <p> 6+ month-long team projects I took part in during my time in LA Blueprint. </p>

        <ProjectCard
        imageSrc={idmImg}
        title="IDONTMIND"
        links={{
          ideation: "https://example.com/ideation",
          figma: "https://figma.com/example",
          code: "https://github.com/example/portfolio-generator",
        }}
      />

      <ProjectCard
        imageSrc={sraaImg}
        title="SRAA"
        links={{
          ideation: "https://example.com/ideation",
          figma: "https://figma.com/example",
          code: "https://github.com/example/portfolio-generator",
        }}
      />

        </div>


        <div className="side-rectangle">

        <div>
          <p className="subtitle"> Education</p>
          <p className="side-text"> UCLA Computer Science '26 </p>
        </div>

        <div style={{marginTop: "15px"}}>
          <p className="subtitle"> About Me </p>
          <img src={profileImg} alt="profile" className="profile-image" />
          <p className="side-text">
            Hi! My name is Angela, and I am a 4th year computer science undergraduate at UCLA. 
            I enjoy the intersection of product and CS, where I can bring my ideas
            to life and leave an impact on people. 
            In my free time, I like to dabble in artistic activities and explore
            the best eats. Feel free to say hi!
          </p>
        </div>

         <div style={{marginTop: "20px"}}>
          <p className="subtitle"> Skills </p>
          <p style={{marginBottom:"10px"}}>
          <span style={{ fontWeight: 600 }}>Languages:</span> C/C++, Python, Kotlin, JavaScript, Golang, XML, HTML/CSS, OCaml
        </p>
        <p style={{marginBottom:"10px"}}>
          <span style={{ fontWeight: 600 }}>Frameworks:</span> React Native, React.js, Node.js, Express
        </p>
        <p style={{marginBottom:"10px"}}>
          <span style={{ fontWeight: 600 }}>Other technologies:</span> MySQL, MongoDB, Android Studio, REST APIs, Git/GitHub
        </p>
      </div>

       <div style={{marginTop: "25px"}}>
          <p className="subtitle"> Coursework </p>
         {coursework.map((item, i) => (
          <p key={i} className="side-text" style={{ display: 'flex', alignItems: 'center', margin: '4px 0' }}>
            <span style={{ color: 'black', marginRight: 8, fontSize: '0.6em'}}>◆</span>
            {item}
          </p>
        ))}
      </div>

        </div>
        </div>
    <Footer/>
        </div>
    
        </div>
      )
     }
}

export default App;
 
