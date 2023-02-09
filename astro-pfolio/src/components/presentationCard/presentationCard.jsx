import "./presentationCard.css";
function PresentationCard() {
  const img = "../../../assets/img/yo.jpg";
  return (
    <section class="bg-gradient items-center flex lg:justify-evenly pt-20 pb-20 sm:flex-col md:flex-col ">
      <div className="sm:flex-col lg:w-1/3 sm:2/3 sm:p-10 sm:text-center md:p-10 md:text-center">
        <h1 className="font-portal text-[70px] ">Noé Rivera</h1>
        <p className="text-xl">Information Technology Engineer</p>
        <p className="text-lg font-quicksand-3 font-[400] text-gray-500">
          Software Engineer with experience in full-stack development, including
          technologies such as React and Angular on front end and C# and Python
          on back end. I'm able to join your team because I learn fast.
          <strong className="font-portal text-xl ml-2 text-black">
            If you can imagine it, I can build it.
          </strong>
        </p>
      </div>
      <figure class="sm:flex-col sm:order-first md:order-first sm:w-2/3">
        <div className="profile-card">
          <img
            src={img}
            className="circle-core grayscale lg:w-[600px] sm:w-[500px] md:w-[400px]"
          />
        </div>
      </figure>
    </section>
  );
}

export default PresentationCard;
