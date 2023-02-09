function NavigationBar() {
  const socialNetworks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/noealirl/",
      icon: "../../assets/icons/linkedin.svg",
    },
    {
      name: "Github",
      url: "https://github.com/Noe-ali",
      icon: "../../assets/icons/twitter.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/noestelar",
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
    <div className="flex items-center lg:justify-center sm:justify-end h-15 border border-gray-200 bg-slate-100 shadow rounded px-5 ">
      <div className=" w-1/3 xs:text-left xs:w-2/3 text-center ">
        <h1 className=" ">Navigation</h1>
      </div>

      <div className="xs:hidden text-right flex-wrap w-1/3 xs:w-auto ">
        <ul className=" ">
          {menu.map((menuItem) => (
            <li className="inline-block mr-4 cursor-pointer hover:text-blue-400">
              {menuItem.name}
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-2 ml-5 text-left w-1/3 xs:w-1/3 xs:text-right ">
        {socialNetworks.map((socialNetwork) => (
          <a className=" inline-block mr-2 cursor-pointer hover:fill-current">
            <img className=" w-7" src={socialNetwork.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavigationBar;
