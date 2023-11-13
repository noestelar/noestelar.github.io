const EquipmentPost = ({ children, title, url, thumbnail }: any) => {
  return (
    <div className="">
      <div className="backdrop-blur-sm shadow-md rounded-md border-2 border-gray-300 md:max-h-40 sm:max-h-[360px] max-h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          aspectratio={2.0}
          className="object-top object-cover "
          placeholder="blur"
        />
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
