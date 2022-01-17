const Navbar = () => {
    return (
        <nav className="w-full flex justify-end p-2 ">
            <ul className="text-sami-white flex space-x-2.5 flex-initial items-center justify-end w-full">
                <li className=" cursor-pointer hover:text-sami-green">Home</li>
                <li className=" cursor-pointer hover:text-sami-green">Work</li>
                <li className="cursor-pointer group hover:text-sami-green border-2 rounded-lg p-1 hover:bg-sami-green border-sami-green"><p className="group-hover:text-sami-white text-sami-green">Resume</p></li>
            </ul>

        </nav>
    )
}

export default Navbar;