import { useState } from "react";
import classNames from "classnames";

const TabsDetail = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Itenary" },
    { id: "dashboard", label: "Fasilitas" },
    { id: "settings", label: "Wisata" }
  ];

  const tabContent = {
    profile: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content for the{" "}
        <strong className="font-medium text-gray-800 dark:text-white">
          Itenary tabs associated content
        </strong>
        . Clicking another tab will toggle the visibility of this one for the
        next.
      </p>
    ),
    dashboard: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content for the{" "}
        <strong className="font-medium text-gray-800 dark:text-white">
          Fasilitas tabs associated content
        </strong>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    ),
    settings: (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content for the{" "}
        <strong className="font-medium text-gray-800 dark:text-white">
          Wisata tabs associated content
        </strong>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    )
  };

  return (
    <div className="bg-white w-full rounded-2xl">
      <div className="relative border-b-2 border-gray-200 dark:border-gray-700 mb-7">
        <ul
          className="flex text-lg font-medium text-center justify-center"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li className="relative flex-grow" role="presentation" key={tab.id}>
              <button
                className={classNames(
                  "w-full p-4 transition-colors duration-300",
                  {
                    "shadow-lg rounded-t-2xl font-bold border-white text-secondary bg-white dark:bg-gray-800 relative -mb-1 -mx-1":
                      activeTab === tab.id,
                    "border-transparent font-semibold text-primer hover:text-primer hover:border-gray-300 dark:bg-gray-700 dark:hover:text-gray-300":
                      activeTab !== tab.id
                  }
                )}
                id={`${tab.id}-tab`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        <div className="p-4">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default TabsDetail;
