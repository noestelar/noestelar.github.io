const RepoCard = (repo: any) => {
  return (
    <div className="dark:bg-grayed-100 bg-grayed-50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md ">
      <div className="px-6 py-5 ">
        <div className="font-bold text-lg mb-2 text-black">
          {repo.repo.name}
        </div>
        <p className="text-white text-base ">{repo.repo.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={repo.repo.html_url}
          target="_blank"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
