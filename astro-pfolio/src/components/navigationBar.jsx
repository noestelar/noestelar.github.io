function NavigationBar() {
  const socialNetworks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/noealirl/",
      icon: "../../assets/icons/linkedin.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/noestelar",
      icon: "../../assets/icons/twitter.svg",
    },
    {
      name: "Github",
      url: "https://github.com/Noe-ali",
      icon: "../../assets/icons/github.svg",
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
    <nav className=" fixed w-full z-10 bg-opacity-75 backdrop-filter backdrop-blur-lg  font-quicksand ">
      <div className=" h-12 flex flex-row sm:justify-between items-center p-6 lg:justify-center">
        <h1 className=" w-1/3 text-gray-600 font-portal text-left md:text-center">
          NOÉ RIVERA
        </h1>

        <div className="sm:hidden  w-1/3  md:w-2/3">
          <ul className="flex flex-row float-right">
            {menu.map((menuItem) => (
              <li className="inline-block cursor-pointer hover:text-blue-400 mx-4">
                {menuItem.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row md:w-1/3">
          {socialNetworks.map((socialNetwork) => (
            <a
              href={socialNetwork.url}
              target="_blank"
              className="cursor-pointer "
            >
              <img className="w-7 mx-1" src={socialNetwork.icon} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
