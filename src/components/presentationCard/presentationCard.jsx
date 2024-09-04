import "./presentationCard.css";
import { IoChevronForwardOutline } from "react-icons/io5/index.js";
import { useTranslations, useTranslatedPath } from "@i18n/utils";
import pictureOfMyself from "@assets/img/yo.webp";
function PresentationCard({ lang }) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  return (
    <section className="w-full max-w-screen-md p-10 mt-10 sm:mx-0 md:px-20">
      <div className="flex flex-col items-center justify-center pb-10 md:flex-row sm:justify-between">
        <article className="">
          <h1 className="font-portal md:text-[60px] text-[30px]">Noé Rivera</h1>
          <p className="mt-5 text-lg text-cyaned-500">
            {t("index.description")}
          </p>
        </article>
        <figure className="flex mt-5 md:mt-0">
          <div className="profile-card flex items-center justify-center">
            <img
              src={pictureOfMyself}
              className="circle-core w-[120px] h-[120px] rounded-full object-cover object-top"
              alt="Profile picture"
              loading="lazy"
              decoding="async"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </figure>
      </div>

      <div className="flex flex-col w-full">
        <p className="text-md font-quicksand-3 font-[400] ">
          {t("index.paragraph")}
          <strong className="ml-2 font-portal text-md text-zinc-900 dark:text-white ">
            {t("index.paragraph.impact")}
          </strong>
        </p>
      </div>
      <section className="flex items-center justify-center mt-4">
        <a
          href={translatePath("/works/")}
          className="px-5 py-2 text-white rounded-lg dark:bg-cyaned-500 bg-cyaned-700 dark:text-black font-portal hover:opacity-80"
        >
          {t("index.button")}
          <IoChevronForwardOutline className="inline mb-0.5" />
        </a>
      </section>
    </section>
  );
}

export default PresentationCard;
