import {
	RiGithubLine,
	RiFacebookLine,
	RiInstagramLine,
	RiTwitterLine,
	RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
	const links = [
		{ icon: "github", username: "Sami64", url: "http://github.com/Sami64" },
		{
			icon: "instagram",
			username: "sami_khae",
			url: "https://www.instagram.com/sami_khae/",
		},
		{
			icon: "facebook",
			username: "Samuel Kow Paintsil",
			url: "https://www.facebook.com/samikhae64",
		},
		{
			icon: "linkedin",
			username: "Samuel Kow Paintsil",
			url: "https://www.linkedin.com/in/samuel-kow-p-200724124/",
		},
	];

	const iconClassName =
		"group-hover:p-0 p-px h-7 w-7 z-10 transition-all text-sami-white group-hover:text-sami-green";

	return (
		<div
			id="socials"
			className="flex sticky justify-between bottom-0 w-full pl-9 pr-5 md:px-20 items-end"
		>
			<ul className="flex flex-col space-y-6 before:w-px before:bg-sami-white before:h-full before:absolute before:-ml-5 pb-24 before:mt-2">
				{links.map((link, i) => (
					<a href={link?.url} target="_blank" rel="noopener noreferrer">
						<li
							key={i}
							className="group relative cursor-pointer flex items-center space-x-2"
						>
							{link?.icon == "github" ? (
								<RiGithubLine className={`${iconClassName}`} />
							) : link?.icon == "linkedin" ? (
								<RiLinkedinLine className={`${iconClassName}`} />
							) : link?.icon == "twitter" ? (
								<RiTwitterLine className={`${iconClassName}`} />
							) : link?.icon == "instagram" ? (
								<RiInstagramLine className={`${iconClassName}`} />
							) : link?.icon == "facebook" ? (
								<RiFacebookLine className={`${iconClassName}`} />
							) : undefined}
							<span className="absolute left-3 opacity-0 group-hover:left-7 group-hover:opacity-100 transition-all text-sami-green">
								{link?.username}
							</span>
						</li>
					</a>
				))}
			</ul>
			<div className="relative pb-80 text-sami-white border-r-sami-white border-r bg-sami-black">
				<div className="absolute -right-40 -top-2 rotate-90 cursor-pointer origin-top-left hover:-top-4 hover:text-sami-green transition-all">
					smashbros54@gmail.com
				</div>
			</div>

			{/* <div className="relative text-sami-white  border-r-sami-white border-r pb-60">
				<div classname="absolute -right-48 -top-2 rotate-90 cursor-pointer origin-top-left hover:-top-4 hover:text-sami-green transition-all">
					smashbros54@gmail.com
				</div>
			</div> */}
		</div>
	);
};

export default Socials;
