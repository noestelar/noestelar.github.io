const EquipmentPost = ({ children, title, url, thumbnail }: any) => {
  return (
    <div className="">
      <div className="  backdrop-blur-sm shadow-md rounded-lg overflow-hidden border-2 border-gray-300 ">
        <div className=" h-72 md:max-h-44 max-h-64 sm:max-h-72 ">
          <img
            src={thumbnail}
            alt={title}
            className="object-top object-cover aspect-w-2 aspect-h-1 "
            placeholder="blur"
          />
        </div>
      </div>
      <div className="px-6 py-5 text-center">
        <div className="font-bold text-lg mb-2 dark:text-white text-black">
          {title ? title : ""}
        </div>
        <p className="dark:text-white text-base text-black ">{children}</p>
      </div>
    </div>
  );
};

export default EquipmentPost;
