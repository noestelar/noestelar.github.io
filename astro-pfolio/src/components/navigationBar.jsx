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
    <nav className=" fixed w-full z-10 bg-opacity-35 backdrop-filter backdrop-blur-lg font-quicksand mt-10">
      <div className="flex flex-row items-center justify-center font-quicksand">
        <h1 className=" font-portal mr-3">NOÉ RIVERA</h1>
        <div className="">
          <ul className="flex flex-row float-right">
            {menu.map((menuItem) => (
              <li className="inline-block cursor-pointer hover:text-blue-400 mx-4">
                {menuItem.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row ml-1">
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
