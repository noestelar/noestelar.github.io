import "./CompanyMarquee.css";

function CompanyMarquee() {
  const logos = [
    "../../../assets/img/FordLogo.png",
    "../../../assets/img/Schaeffler_logo.svg",
    "../../../assets/img/idt-logo.png",
    "../../../assets/img/Alten_logo.png",
  ];
  const logosConcat = logos.concat(logos); // duplicate the logos and concatenate them together
  return (
    <div className="max-w-screen-md w-full mx-auto sm:mx-0 md:p-20 p-10">
      <h3 className="font-portal text-lg underline underline-offset-4  mb-10 ">
        Companies that believed in me
      </h3>

      <div className="marquee-container  overflow-hidden pt-4">
        <div
          className="marquee-content flex flex-nowrap  top-0 left-0"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {logosConcat.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company logo"
              className="h-8 mx-4 w-auto grayscale"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyMarquee;
