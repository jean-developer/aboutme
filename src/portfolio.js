/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};


const greeting = {
  username: "Jean Arnaud",
  title: 'greeting.title',
  subTitle: emoji(
    "greeting.subtitle"
  ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jean-developer",
  linkedin: "https://www.linkedin.com/in/jarnaudba/",
  gmail: "jarnaudba@gmail.com",
  // gitlab: "https://gitlab.com/jarnaudba",
  // facebook: "https://www.facebook.com/jarnaudba",
  instagram: "https://www.instagram.com/jc_arnaud/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "skillsSection.skillstitle",
  subTitle: "skillsSection.skillssubtitle",
  skills: [
    "skillsSection.skill1",
    "skillsSection.skill2",
    "skillsSection.skill3",
    "skillsSection.skill4"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [{
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Mobile Development",
      fontAwesomeClassname: "fas fa-mobile"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "education.APEC.schoolName",
      logo: require("./assets/images/logo-unapec.jpeg"),
      subHeader: "education.APEC.subHeader",
      duration: "2018 - 2023",
    },
    {
      schoolName: "education.ITLA.schoolName",
      logo: require("./assets/images/itlalogo.png"),
      subHeader: "education.ITLA.subHeader",
      duration: "2016 - 2018",
    },
    {
      schoolName: "education.fabioamota.schoolName",
      logo: require("./assets/images/itfamlogo.png"),
      subHeader: "education.fabioamota.subHeader",
      duration: "2014 - 2016"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Section: true,
      Title: "skillProgress.subTitles.BackEndTechnologies"
    },
    {
      Stack: "NODEJS", //Insert stack or technology you have experience in
      progressPercentage: "92%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ASP.NET Core", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ASP.NET", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Section: true,
      Title: "skillProgress.subTitles.FrontEndTechnologies"
    },
    {
      Stack: "Ionic", //Insert stack or technology you have experience in
      progressPercentage: "92%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular",
      progressPercentage: "90%"
    },
    {
      Stack: "Razor Pages",
      progressPercentage: "65%"
    },
    {
      Stack: "ReactJS",
      progressPercentage: "60%"
    },
    {
      Section: true,
      Title: "skillProgress.subTitles.MessageBrokers"
    },
    {
      Stack: "RabbitMQ",
      progressPercentage: "70%"
    },
    {
      Section: true,
      Title: "skillProgress.subTitles.VersionControlSystems"
    },
    {
      Stack: "Git",
      progressPercentage: "90%"
    },
    {
      Stack: "TFS (Azure Devops)",
      progressPercentage: "86%"
    },
    {
      Section: true,
      Title: "skillProgress.subTitles.ProgrammingLanguages"
    },
    {
      Stack: "TypeScript", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C#", //Insert stack or technology you have experience in
      progressPercentage: "93%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Section: true,
      Title: "skillProgress.subTitles.PaaS&CaaS"
    },
    {
      Stack: "Red Hat Openshift Container Platform",
      progressPercentage: "85%"
    },
    {
      Stack: "Docker",
      progressPercentage: "82%"
    },
    {
      Section: true,
      Title: "skillProgress.subTitles.CloudComputingServices"
    },
    {
      Stack: "Azure",
      progressPercentage: "80%"
    },
    {
      Stack: "AWS",
      progressPercentage: "20%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "workExperiences.Encamina.role",
      company: "workExperiences.Encamina.company",
      companylogo: require("./assets/images/encaminalogo.jpg"),
      contractType: "workExperiences.Encamina.contractType",
      date: "workExperiences.Encamina.date",
      desc: "workExperiences.Encamina.desc",
      descBullets:[
        "ASP.NET Core",
        "Angular",
        "C#",
        "Typescript",
        "MySQL",
        "Entity Framework (EF Core)",
        "Agile Methodologies",
        "Self-management",
        "Teamwork",
        "Azure DevOps",
        "Some Azure Portal Services"
      ]
    },
    {
      role: "workExperiences.Endurance.role",
      company: "workExperiences.Endurance.company",
      companylogo: require("./assets/images/endurancelogo.png"),
      contractType: "workExperiences.Endurance.contractType",
      date: "workExperiences.Endurance.date",
      desc: "workExperiences.Endurance.desc",
      descBullets:[
        "C#",
        "ReactJS",
        "Razor Pages",
        "SQL Server",
        "MySQL",
        "Windows Services",
        "Azure DevOps",
        "Some Azure Portal Services"
      ]
    },
    {
      role: "workExperiences.APAP.role",
      company: "workExperiences.APAP.company",
      companylogo: require("./assets/images/apaplogo.jpeg"),
      contractType: "workExperiences.APAP.contractType",
      date: "workExperiences.APAP.date",
      desc: "workExperiences.APAP.desc",
      descBullets:[
        "NodeJS",
        "Angular",
        "C#",
        "Ionic",
        "RabbitMQ",
        "KeyCloak",
        "OpenShift Cloud Platform",
        "Azure DevOps"
      ]
    },
    {
      role: "workExperiences.LogicOne.role",
      company: "workExperiences.LogicOne.company",
      companylogo: require("./assets/images/logicOneLogo.png"),
      contractType: "workExperiences.LogicOne.contractType",
      date: "workExperiences.LogicOne.date",
      desc: "workExperiences.LogicOne.desc",
      descBullets: [
        "Microsoft Dynamics (365 F&O, GP, CRM)",
        "Microsoft .NET Core",
        "Microsoft .NET Framework (MVC)",
        "Ionic (V3, V4)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "startupProjects.title",
  subtitle: "startupProjects.subTitle",
  projects: [{
      image: require("./assets/images/pslearninglogo.webp"),
      projectName: "startupProjects.PSLearning.projectName",
      projectDesc: "startupProjects.PSLearning.projectDesc",
      footerLink: [{
          name: "Visit Website",
          url: "http://pslearning.gob.do/pslearning/"
        }
      ]
    },
    {
      image: require("./assets/images/movilapaplogo.webp"),
      projectName: "startupProjects.Movilapap.projectName",
      projectDesc: "startupProjects.Movilapap.projectDesc",
      footerLink: [{
          name: "View in the App Store",
          url: "https://apps.apple.com/us/app/m%C3%B3vil-apap/id1073508748"
        },
        {
          name: "View in the Play Store",
          url: "https://play.google.com/store/apps/details?id=com.apapmovilprod&hl=en&gl=US"
        }
      ]
    },
    {
      image: require("./assets/images/doraLogo.png"),
      projectName: "startupProjects.DORA.projectName",
      projectDesc: "startupProjects.DORA.projectDesc",
      footerLink: [{
          name: "Visit TIBA website",
          url: "https://www.tibagroup.com/"
        }
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [{
    //     name: "Visit Website",
    //     url: "http://nextu.se/"
    //   }]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [{
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [{
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{
        name: "View Google Assistant Action",
        url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
      }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [{
          name: "Certification",
          url: ""
        },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [{
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [{
    title: "Build Actions For Google Assistant",
    subtitle: "Codelab at GDG DevFest Karachi 2019",
    slides_url: "https://bit.ly/saadpasta-slides",
    event_url: "https://www.facebook.com/events/2339906106275053/"
  }],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "contact.title",
  subtitle: "contact.subtitle",
  email_address: "jarnaudba@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};