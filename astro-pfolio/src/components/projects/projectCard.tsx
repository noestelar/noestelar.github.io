const RepoCard = (repo: any) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <span>reponame</span>
        <div className="font-bold text-lg mb-2">{repo.name}</div>
        <p className="text-white text-base">{repo.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={repo.html_url}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
