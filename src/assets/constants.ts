export const hero_section = {
	title: "hello i'm anup shourya",
	tagline: "unleashing passibilities through passionate programming craftsmanship"
};
export const navbar_links = [
	{
		link_name: "home",
		link_address: "/"
	},
	{
		link_name: "about",
		link_address: "/about"
	},
	{
		link_name: "projects",
		link_address: "/projects"
	},
	{
		link_name: "blogs",
		link_address: "/blogs"
	},
	{
		link_name: "contact",
		link_address: "/contact"
	},
];

// ? Icons
import { IconType } from 'react-icons';
import { VscGithubAlt } from "react-icons/vsc";
import { LiaLinkedin } from "react-icons/lia";
import { TbBrandTwitter } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

export const social_links = [
	{
		social_media_name: "github",
		social_media_link: "https://github.com/AnupShouryaDev",
		social_media_icon: VscGithubAlt as IconType,

	},
	{
		social_media_name: "linkedin",
		social_media_link: "https://www.linked.com",
		social_media_icon: LiaLinkedin as IconType,
	},
	{
		social_media_name: "twitter",
		social_media_link: "https://ww.twitter.com",
		social_media_icon: TbBrandTwitter as IconType,
	},
	{
		social_media_name: "email",
		social_media_link: "mailto:contact.yourwebdev@gmail.com",
		social_media_icon: HiOutlineMail as IconType,
	},
];
// ? Icons
import { RiReactjsLine } from 'react-icons/ri';
import { ImHtmlFive } from 'react-icons/im';
import { BiLogoCss3 } from 'react-icons/bi';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiTailwindcss , SiMongodb , SiExpress} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';

export const about_section = {
	whoIam: {
		myName: "Anup shourya",
		myStatus: "Service Manager as WorldWide P-Mobile Inc.",
		mySelfPara1: "For instance, the conventional notion of the framework of the consequential risks is getting more complicated against the backdrop of The Approach of Empiric Facilit.",
		mySelfPara2: "risks is getting more complicated against the backdrop of The Approach of Empiric Facilit instance, the conventional notion of the framework."
	},
	howIWork: [
		{
			stepNumber: 1,
			icon :  VscGithubAlt as IconType,
			name: "Requirement Gathering",
			details: " Understand the client's needs and project requirements. Gather information about the desired features, functionality, and design preferences."
		},
		{
			stepNumber: 2,
			icon :  VscGithubAlt as IconType,
			name: "Planning and Architecture",
			details: "Create a plan and define the project architecture. Determine the technology stack, frameworks, and tools to be used. Design the database schema and plan the overall structure of the application."
		},
		{
			stepNumber: 3,
			icon :  VscGithubAlt as IconType,
			name: "Front-end Development",
			details: "Build the user interface using HTML, CSS, and JavaScript. Implement responsive design principles to ensure the website or web application is accessible on different devices and screen sizes. Use front-end frameworks like React, Angular, or Vue.js for efficient development."
		},
		{
			stepNumber: 4,
			icon :  VscGithubAlt as IconType,
			name: "Back-end Development",
			details: "Develop the server-side logic and functionality of the application. Use programming languages like Node.js, Python, or Java to handle data processing, server communication, and business logic. Build APIs and integrate external services if required."
		},
		{
			stepNumber: 5,
			icon :  VscGithubAlt as IconType,
			name: "Database Development",
			details: "Design and implement the database structure using technologies like MySQL, PostgreSQL, MongoDB, or Firebase. Define the data models, create tables or collections, and establish relationships between entities."
		},
		{
			stepNumber: 6,
			icon :  VscGithubAlt as IconType,
			name: "Integration and Testing",
			details: " Integrate the front-end and back-end components. Test the application's functionality, performance, and security. Conduct unit testing, integration testing, and user acceptance testing to identify and resolve any issues."
		},
	]
	
	,
	whatIknow: [
		{
			techName: "BiLogoTypescript",
			techIcon:  BiLogoTypescript as IconType
		},
		{
			techName: "RiReactjsLine",
			techIcon:  RiReactjsLine as IconType
		},
		{
			techName: "ImHtmlFive",
			techIcon:  ImHtmlFive as IconType
		},
		{
			techName: "BiLogoCss3",
			techIcon:  BiLogoCss3 as IconType
		},
		{
			techName: "RiJavascriptFill",
			techIcon:  RiJavascriptFill as IconType
		},
		{
			techName: "SiTailwindcss",
			techIcon:  SiTailwindcss as IconType
		},
		{
			techName: "IoLogoNodejs",
			techIcon:  IoLogoNodejs as IconType
		},
		{
			techName: "SiExpress",
			techIcon:  SiExpress as IconType
		},
		{
			techName: "SiMongodb",
			techIcon:  SiMongodb as IconType
		},
	]
};
export const projects_section = [
	{
		projectName: "google adds",
		projectSummary: "lorem labma cahuda hai",
		projectGithubLink: "https//www.github.com/yele",
		projectLivedemoLink: "https//www.yele.com/",
		projectImgLink: "./src/assests/yele.jpg",
	},
	{
		projectName: "google adds",
		projectSummary: "lorem labma cahuda hai",
		projectGithubLink: "https//www.github.com/yele",
		projectLivedemoLink: "https//www.yele.com/",
		projectImgLink: "./src/assests/yele.jpg",
	},
	{
		projectName: "google adds",
		projectSummary: "lorem labma cahuda hai",
		projectGithubLink: "https//www.github.com/yele",
		projectLivedemoLink: "https//www.yele.com/",
		projectImgLink: "./src/assests/yele.jpg",
	},
	{
		projectName: "google adds",
		projectSummary: "lorem labma cahuda hai",
		projectGithubLink: "https//www.github.com/yele",
		projectLivedemoLink: "https//www.yele.com/",
		projectImgLink: "./src/assests/yele.jpg",
	},
];
export const footer_section = {
	footerMsg: "ye project  hum banai hai samajh me aya jya"
};
