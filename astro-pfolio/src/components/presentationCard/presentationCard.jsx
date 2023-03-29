import "./presentationCard.css";
function PresentationCard() {
  const img = "../../../assets/img/yo.jpg";
  return (
    <section class="max-w-screen-md w-full sm:mx-0 md:p-20 p-10 ">
      <div className="flex pt-20 pb-10 md:flex-row items-center justify-center sm:justify-between flex-col" >
        <article className="">
          <h1 className="font-portal md:text-[60px] text-[30px]">Noé Rivera</h1>
          <p className="text-lg">Information Technology Engineer</p>
        </article>
        <figure class="md:ml-10 flex md:mt-0 mt-5">
          <div className="profile-card">
            <img src={img} className="circle-core grayscale w-[120px]" />
          </div>
        </figure>
      </div>

      <div className="flex flex-col w-full">
        <p className="text-md font-quicksand-3 font-[400]">
          Software Engineer with experience in full-stack development, including
          technologies such as React and Angular on front end and C# and Python
          on back end. I'm able to join your team because I learn fast.
          <strong className="font-portal text-md ml-2 text-white">
            If you can imagine it, I can build it.
          </strong>
        </p>
      </div>
    </section>
  );
}

export default PresentationCard;
