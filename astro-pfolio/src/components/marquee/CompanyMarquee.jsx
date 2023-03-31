import Marquee from "react-fast-marquee";

function CompanyMarquee() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg", // Tesla logo
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg",
  ];
  return (
    <div className="max-w-screen-md w-full sm:mx-0 md:p-20 p-10">
        <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      <h3 className="font-portal text-xl">Enterprises that believed in me</h3>
    
      <div className="">
        {logos.map((logo) => (
          <img key={logo} src={logo} alt="Company logo" className="h-8 mx-4" />
        ))}
      </div>
    </div>
  );
}

export default CompanyMarquee;
