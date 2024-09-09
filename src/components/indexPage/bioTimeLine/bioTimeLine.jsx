import { date } from "astro/zod";
import "./bioTimeLine.css";
import { useTranslations } from "@i18n/utils";
function BioTimeLine({ lang }) {
  const t = useTranslations(lang);
  const events = [
    {
      date: "2024",
      title: t("index.bioTimeline.2024"),
    },
    {
      date: "2023",
      title: t("index.bioTimeline.2023"),
    },
    {
      date: "2022",
      title: t("index.bioTimeline.2022-1"),
    },
    {
      title: t("index.bioTimeline.2022-2"),
    },
    {
      title: t("index.bioTimeline.2022-3"),
    },
    // {
    //   date: "1999",
    //   title: t("index.bioTimeline.1999"),
    // },
  ];
  return (
    <section className="max-w-screen-md w-full sm:mx-0 md:px-20 px-10">
      <h1 className="text-lg font-bold underline underline-offset-2">
        {t("index.bioTimeline.title")}
      </h1>

      <div className="max-w-3xl mx-auto p-4 ">
        <ul className="timeline">
          {events.map((event, key) => (
            <li key={key}>
              <div className="timeline-badge ">
                <span className=" dark:text-cyaned-500 text-cyaned-700 font-bold">
                  {event.date}
                </span>
              </div>
              <div className="my-2">
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
