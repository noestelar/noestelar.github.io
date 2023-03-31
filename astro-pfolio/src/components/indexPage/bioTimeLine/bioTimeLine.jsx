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
      date: "May 2022",
      title: "Started to Work at IDT Consulting as a Full Stack Developer",
    },
    {
      date: "August 2022",
      title:
        "Started to Work at Schaeffler Transmission Systems as a Full Stack Developer",
    },
    {
      date: "2023",
      title: "Started to work at Ford Motor Company as an Automation Engineer",
    },
  ];
  return (
    <section className="max-w-screen-md w-full sm:mx-0 md:p-20 p-10">
      <h1 className="text-lg font-bold underline underline-offset-2">Bio</h1>

      <div className="max-w-3xl mx-auto p-4">
        <ul className="timeline">
          {events.map((event) => (
            <li key={event.date}>
              <div className="timeline-badge bg-indigo-500">
                <span className="text-white">{event.date}</span>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="text-lg font-medium">{event.title}</h3>
                </div>
                <div className="timeline-body">
                  <p className="text-gray-500">{event.description}</p>
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
