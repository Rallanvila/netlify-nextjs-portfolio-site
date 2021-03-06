import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import WhatIDo from "../components/WhatIDo";
import Projects from "../components/Projects";
import HeadTag from "../components/HeadTag";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import ScrollUpButton from "react-scroll-up-button";
import Drift from "react-driftjs";
import Footer from "../components/Footer";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 200,
			once: true,
			anchorPlacement: "center-bottom",
		});
	});

	return (
		<>
			<HeadTag />
			<Nav />
			<Hero />
			<AboutMe data-aos="fade-up" />
			<WhatIDo data-aos="fade-up" />
			<Experience data-aos="fade-up" />
			<Resume data-aos="fade-up" />
			<Projects data-aos="fade-up" />
			{/* <ScrollUpButton /> */}
			<Drift appId="u8dv2hf58kkk" />
			<Footer />
		</>
	);
}
