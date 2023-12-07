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
	// ? In Future
	// {
	// 	link_name: "blogs",
	// 	link_address: "/blogs"
	// },
	{
		link_name: "contact",
		link_address: "/contact"
	},
];

// ? Icons
import { IconType } from 'react-icons';
import { VscGithubAlt } from "react-icons/vsc";
import { LiaLinkedin } from "react-icons/lia";
import { TbBrandSass, TbBrandTwitter } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

export const social_links = [
	{
		social_media_name: "github",
		social_media_link: "https://github.com/AnupShouryaDev",
		social_media_icon: VscGithubAlt as IconType,

	},
	{
		social_media_name: "linkedin",
		social_media_link: "https://www.linkedin.com/in/anup-shourya-141b3b1b5/",
		social_media_icon: LiaLinkedin as IconType,
	},
	{
		social_media_name: "twitter",
		social_media_link: 'https://twitter.com/Shourya_Anup',
		social_media_icon: TbBrandTwitter as IconType,
	},
	{
		social_media_name: "email",
		social_media_link: "mailto:contact.yourwebdev@gmail.com",
		social_media_icon: HiOutlineMail as IconType,
	},
];
// ? Skills Icons
import { FaTools } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { BsWindowFullscreen, BsChatLeftDots } from 'react-icons/bs';
import { TbServerBolt } from 'react-icons/tb';
import { GiHypodermicTest } from 'react-icons/gi';
import { AiOutlineDeploymentUnit, AiFillSecurityScan } from 'react-icons/ai';

// ? Languages Icons
import { TbBrandTypescript, TbBrandJavascript, TbBrandCss3, TbBrandMongodb, TbBrandCpp } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoRedux, BiLogoHtml5 } from "react-icons/bi";
import { FaNetworkWired, FaGitAlt } from "react-icons/fa";

export const about_section = {
	whoIam: {
		myName: "Anup shourya",
		myStatus: "Enthusiastic about Building Web Solutions",
		mySelfPara1: "As a passionate and skilled Full Stack MERN Developer, I am eager to contribute my expertise to a dynamic and forward-thinking company. With a strong foundation in web development and proficiency in MERN stack technologies, I am excited to take on new challenges and create innovative web solutions.",
		mySelfPara2: "My dedication to staying up-to-date with the latest trends and best practices in the industry drives my commitment to excellence in every project I undertake. I am eager to join a good company where I can collaborate with like-minded professionals and play a key role in delivering impactful web applications that make a difference.",
		mySelfPara3: "Together, let's build a brighter digital future!"
	},
	howIWork: [
		{
			stepNumber: 1,
			icon: FaTools as IconType,
			name: "Gather Requirements:",
			details: "Understand project needs and objectives."
		},
		{
			stepNumber: 2,
			icon: MdOutlineDesignServices as IconType,
			name: "UI/UX & Design:",
			details: "Create a detailed roadmap and UI/UX designs."
		},
		{
			stepNumber: 3,
			icon: BsWindowFullscreen as IconType,
			name: " Frontend Development",
			details: "Implement the user interface using ReactJS & SASS & TailwindCss."
		},
		{
			stepNumber: 4,
			icon: TbServerBolt as IconType,
			name: " Backend Development:",
			details: "Set up server, database, and develop server-side functionalities in NodeJs & MongoDB or SQL DB."
		},
		{
			stepNumber: 5,
			icon: GiHypodermicTest as IconType,
			name: " Integration & Testing",
			details: "Integrate frontend and backend components and conduct thorough testing using tools like Jest or Mocha."
		},
		{
			stepNumber: 6,
			icon: AiOutlineDeploymentUnit as IconType,
			name: "Deployment",
			details: "Prepare the application for production and deploy to live servers on DegitalOcean or Nelify."
		},
		{
			stepNumber: 7,
			icon: AiFillSecurityScan as IconType,
			name: " Security & Maintenance",
			details: " Implement security measures and provide ongoing maintenance."
		},
		{
			stepNumber: 8,
			icon: BsChatLeftDots as IconType,
			name: "Communication",
			details: "Regularly communicate progress with stakeholders and team members."
		},
	]
	,
	whatIknow: [
		{
			no: 1,
			techName: "javascript",
			techIcon: TbBrandJavascript as IconType
		},
		{
			no: 2,
			techName: "reactjs",
			techIcon: GrReactjs as IconType
		},
		{
			no: 3,
			techName: "TypeScript",
			techIcon: TbBrandTypescript as IconType
		},
		{
			no: 4,
			techName: "nodejs",
			techIcon: IoLogoNodejs as IconType
		},
		{
			no: 5,
			techName: "mongodb",
			techIcon: TbBrandMongodb as IconType
		},
		{
			no: 6,
			techName: "Sass",
			techIcon: TbBrandSass as IconType
		},
		{
			no: 7,
			techName: "C++",
			techIcon: TbBrandCpp as IconType
		},
		{
			no: 8,
			techName: "html",
			techIcon: BiLogoHtml5 as IconType
		},
		{
			no: 9,
			techName: "Css",
			techIcon: TbBrandCss3 as IconType
		},
		{
			no: 10,
			techName: "express",
			techIcon: SiExpress as IconType
		},
		{
			no: 11,
			techName: "Git",
			techIcon: FaGitAlt as IconType
		},
		{
			no: 12,
			techName: "tailwindcss",
			techIcon: SiTailwindcss as IconType
		},
		{
			no: 13,
			techName: "Redux",
			techIcon: BiLogoRedux as IconType
		},
		{
			no: 14,
			techName: "API",
			techIcon: AiOutlineApi as IconType
		},
		{
			no: 15,
			techName: "System Design",
			techIcon: FaNetworkWired as IconType
		},
	]
};
export const projects_section = [
	{
		projectNo: 1,
		projectName: "MindScribe",
		projectSummary: "MindScribe is a revolutionary note-taking platform that unlocks the power of your thoughts.",
		projectGithubLink: "https://github.com/DevAnupShourya/MindScribe",
		projectLivedemoLink: '',
		projectImgLink: "./projects/p1.png",
	},
	{
		projectNo: 2,
		projectName: "Vixel | 🏃🏻‍♂️ ONGOING 🏃🏻‍♂️",
		projectSummary: "World in Pixels, the ultimate social media platform designed to connect individuals.",
		projectGithubLink: "https://github.com/DevAnupShourya/vixel",
		projectLivedemoLink: '',
		projectImgLink: "./projects/p2.png",
	},
];
