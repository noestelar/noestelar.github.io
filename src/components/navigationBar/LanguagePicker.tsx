import { Menu } from "@headlessui/react";

import { languages } from "@i18n/ui";
import { getRelativeLocaleUrl } from "@i18n/utils";
import { IoChevronDown } from "react-icons/io5/index.js";
import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

interface LanguagePickerProps {
  lang: keyof typeof languages;
}

export function LanguagePicker({ lang }: LanguagePickerProps) {
  const [selected, setSelected] = useState(languages[lang]);
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    const route = path.split("/").slice(2).join("/");
    setCurrentRoute(route);
  }, []);

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md dark:hover:bg-opacity-30 hover:bg-opacity-75 dark:bg-zinc-600 bg-orange-300 px-4 py-2 text-sm font-medium dark:text-white ">
            {selected}
            <IoChevronDown
              className="ml-2 -mr-1 h-5 w-5 dark:text-white hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md dark:bg-zinc-600 bg-orange-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {Object.entries(languages).map(([langKey, label]) => (
                  <Menu.Item key={langKey}>
                    {({ active }) => (
                      <a
                        href={getRelativeLocaleUrl(langKey as keyof typeof languages, currentRoute)}
                        className={`${active
                            ? "dark:bg-gray-500 dark:text-cyaned-500 bg-orange-200"
                            : "dark:text-white text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  );
}
