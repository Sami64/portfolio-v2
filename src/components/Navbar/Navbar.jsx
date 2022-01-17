import { ResumeBtn } from "..";

const Navbar = () => {
	return (
		<nav id="navbar" className="absolute top-0 w-full py-8 ">
			<div className="container md:flex justify-between hidden">
				<span></span>
				<ul className="text-sami-white flex space-x-10 items-center justify-end w-full">
					<li className=" cursor-pointer hover:text-sami-green">Home</li>
					<li className=" cursor-pointer hover:text-sami-green">Work</li>
					<ResumeBtn title="Resume" />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
