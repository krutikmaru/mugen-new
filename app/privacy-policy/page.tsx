import React from "react";
import { privacyPolicy } from "../lib/data/privacy-policy";

function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-start p-20 mt-8 text-black dark:text-white">
      <h1 className="text-5xl font-medium mb-8 ">Privacy Policy</h1>
      <h2 className="">WEBSITE TERMS OF USE EFFECTIVE 2021</h2>
      <p className="font-light mb-8">Effective date: 2021-11-30</p>

      {privacyPolicy.map((policy) => {
        return (
          <div key={policy.heading}>
            <h3 className="text-3xl font-medium  mb-1">{policy.heading}</h3>
            {policy.description && (
              <p className="font-light mb-8 text-sm ">{policy.description}</p>
            )}
            {policy.subSections &&
              policy.subSections.map((subSection) => {
                return (
                  <div key={subSection.subHeading} className="pl-10 mt-4">
                    <h4 className="text-xl font-medium  mb-1">
                      {subSection.subHeading}
                    </h4>
                    <p className="font-light mb-8 text-sm ">
                      {subSection.description}
                    </p>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Page;
