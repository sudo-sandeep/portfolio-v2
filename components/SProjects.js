import React from "react";
import Image from "next/image";

const SProjects = () => {
  return (
    <section
      className="bg-white py-2 rounded-xl px-6"
      id="projects"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2 className="text-dark text-2xl md:text-4xl font-bold uppercase text-center mb-3 py-4">
        Works & Projects
      </h2>
      <p className="text-sm text-center">
        Check out my frontend projects, carefully built with attention to
        detail, performance, and user experience—each one a reflection of my
        passion for clean and efficient web development.
      </p>
      <div className="grid py-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/onboarding.webp"
              alt="Onboarding Website"
              fill
              priority
              className="h-full w-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              Onboarding
            </h3>
            <p className="text-sm mb-2">Quick Commerce Onboarding Platform</p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
                Built reusable and responsive <b>React components</b> from Figma
                designs.
              </li>
              <li className="text-xs">
                Used <b>Data Table Grid</b> to display onboarding progress and
                reports.
              </li>
              <li className="text-xs">
                Integrated <b>Chart.js</b> for insights into hiring trends and
                performance.
              </li>
              <li className="text-xs">
                Utilized <b>Context API</b> for managing global state
                efficiently.
              </li>
              <li className="text-xs">
                Implemented <b>JWT-based authentication</b> with role-based
                access control.
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/forafera.webp"
              alt="Forafera Website"
              fill
              priority
              className="h-full w-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              Forafera
            </h3>
            <p className="text-sm mb-2">
              Market Intelligence & Business Data Platform
            </p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
                Convert Figma designs into responsive and interactive{" "}
                <b>React components</b>.
              </li>
              <li className="text-xs">
                Used <b>AG Grid</b> to display language data and reports.
              </li>
              <li className="text-xs">
                Implement charts using <b>Chart.js</b> for dynamic data
                representation.
              </li>
              <li className="text-xs">
                Integrate <b>Google Maps API</b> for location-based features.
              </li>
              <li className="text-xs">
                Fetch and display data from REST APIs using <b>Axios</b>{" "}
                seamlessly.
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/crm.webp"
              alt="CRM Website"
              fill
              priority
              className="h-full w-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              CRM
            </h3>
            <p className="text-sm mb-2">Sales and Market Automation Platform</p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
                Convert Figma designs into responsive and interactive{" "}
                <b>React components</b>.
              </li>
              <li className="text-xs">
                Implement charts using <b>Chart.js</b> for dynamic data
                representation.
              </li>
              <li className="text-xs">
                Integrated <b>MUI (Material-UI)</b> for a modern and consistent
                design.
              </li>
              <li className="text-xs">
                Implemented features for
                <b>lead generation, sales tracking, and customer engagement.</b>
              </li>
              <li className="text-xs">
                Enabled <b>accurate reporting and insights</b> for business
                growth.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SProjects;
