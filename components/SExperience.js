import React from "react";
import { FaBookmark } from "react-icons/fa";

const SExperience = () => {
  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="bg-white py-6 rounded-xl px-6">
        <h2 className="text-dark text-3xl font-bold mb-4">Experience</h2>
        <div className="grid gap-4">
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Sep 2023 - Present</p>
              <h3 className="text-dark font-medium">
                Isourse Technologies Pvt. Ltd.
              </h3>
              <p>Senior React Developer</p>
              <p className="text-xs">New Delhi</p>
            </div>
          </div>
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Sep 2022 - Sep 2023</p>
              <h3 className="text-dark font-medium">Burgwalden Ltd.</h3>
              <p>React Developer</p>
              <p className="text-xs">Germany</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 rounded-xl px-6">
        <h2 className="text-dark text-3xl font-bold mb-4">Education</h2>
        <div className="grid gap-4">
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Aug 2018 - Sep 2022</p>
              <h3 className="text-dark font-medium">
                G.B. Pant Government Engg. Clg.
              </h3>
              <p>B.Tech</p>
              <p className="text-xs">New Delhi</p>
            </div>
          </div>
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Apr 2016 - Apr 2018</p>
              <h3 className="text-dark font-medium">
                Sanjeevani Public School
              </h3>
              <p className="text-xs">
                Class 12<sup>th</sup> - 92%{" "}
              </p>
              <p className="text-xs">
                Class 10<sup>th</sup> - 9.4 CGPA
              </p>
              <p className="text-xs">New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SExperience;
