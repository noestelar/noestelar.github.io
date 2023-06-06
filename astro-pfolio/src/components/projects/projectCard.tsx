const ProjectCard = ({ children, title, url, thumbnail }) => {
  return (
    <div className=" dark:bg-grayed-100 bg-grayed-50 backdrop-blur-sm shadow-md rounded-lg overflow-hidden  text-center">
      <img src={thumbnail} alt={title} className="" placeholder="blur"/>
      <div className="px-6 py-5 ">
        <div className="font-bold text-lg mb-2 dark:text-white text-black">
          {title ? title : ""}
        </div>
        <p className="dark:text-white text-base text-black ">{children}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
