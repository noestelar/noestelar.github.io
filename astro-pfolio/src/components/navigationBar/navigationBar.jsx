import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoMenu} from "react-icons/io5";
import NavigationMenu from "./navigationMenu";  
import React from "react";
function NavigationBar() {
  const socialNetworks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/noealirl/",
      icon: IoLogoLinkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/noestelar",
      icon: IoLogoGithub,
    },
    {
      name: "Github",
      url: "https://github.com/Noe-ali",
      icon: IoLogoTwitter,
    },
  ];

  const menu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className=" fixed  w-full z-10 bg-opacity-35 backdrop-filter backdrop-blur-lg font-quicksand p-3 ">
      <div className="flex flex-row items-center md:justify-center font-quicksand justify-between">
        <h1 className=" font-portal mr-3">NOÉ RIVERA</h1>
        <div className="hidden sm:flex mx-10">
          <ul className="flex flex-row float-right">
            {menu.map((menuItem) => (
              <li className="inline-block cursor-pointer hover:text-blue-400 mx-3">
                {menuItem.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row ml-1 items-center  ">
          {socialNetworks.map((socialNetwork) => (
            <a
              href={socialNetwork.url}
              target="_blank"
              className="cursor-pointer "
            >
              <div className="mx-2 hidden md:block" style={{ fontSize: "24px" }}>
                {React.createElement(socialNetwork.icon)}
              </div>
            </a>
          ))}
          <NavigationMenu />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
