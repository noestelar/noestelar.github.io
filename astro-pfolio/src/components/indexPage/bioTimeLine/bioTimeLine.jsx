import "./bioTimeLine.css";
function BioTimeLine() {
  const events = [
    {
      date: "1999",
      title: "Born in México City, México",
    },
    {
      date: "2022",
      title:
        "Completed studies in Computer Science and Technology Engineering at the Polytechnic University of Puebla, México",
    },
    {
      title:
        "Worked at IDT Consulting as a Full Stack Developer doing Ecommerce, Web and Mobile Apps",
    },
    {
      title:
        "Worked at Schaeffler Transmission Systems as a Full Stack Developer doing Web Services and Web Apps focused on security",
    },
    {
      date: "2023",
      title: "Started to work at Ford Motor Company as an Automation Engineer",
    },
  ];
  return (
    <section className="max-w-screen-md w-full sm:mx-0 md:px-20 px-10">
      <h1 className="text-lg font-bold underline underline-offset-2">Bio</h1>

      <div className="max-w-3xl mx-auto p-4">
        <ul className="timeline">
          {events.map((event, key) => (
            <li key={key}>
              <div className="timeline-badge ">
                <span className=" dark:text-cyaned-500 text-cyaned-700 font-bold">{event.date}</span>
              </div>
              <div className="mt-2">
                <div className="">
                  <h3 className="font-quicksand-3 text-md">{event.title}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BioTimeLine;
