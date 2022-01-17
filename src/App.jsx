import { useState } from "react";
import { Intro, Navbar, Work, Socials } from "./components";
import ReactFullpage from "@fullpage/react-fullpage";

const App = () => {
	return (
		<ReactFullpage
			navigation
			anchors={["home", "work"]}
			fixedElements="#navbar, #socials"
			paddingTop="54px"
			responsiveWidth={1024}
			responsiveSlides={true}
			render={({ _, fullpageApi }) => {
				return (
					<div className={`fullpage-wrapper bg-sami-black`}>
						<Navbar />
						<Intro />
						<Work />
						<Socials />
					</div>
				);
			}}
		/>
	);
};

export default App;
