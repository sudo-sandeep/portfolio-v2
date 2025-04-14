import React from "react";
import Image from "next/image";
import { MdFileDownload } from "react-icons/md";
import { heebo } from "@/fonts/font";

const SIntro = () => {
  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-3 md:grid-rows-4">
      <div className="bg-white text-center py-6 rounded-xl px-6 col-span-1 md:row-span-4">
        <div className="w-[244px] h-[244px] mx-auto border-2 border-primary rounded-full p-2 border-dashed">
          <div className="relative h-full w-full">
            <Image
              src="/profile.jpeg"
              alt="Profile Image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 244px"
              priority
              objectFit="cover"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
        <p className="mt-4 mb-2 uppercase tracking-wider text-dark">
          hello everybody, I am{" "}
        </p>
        <p
          className={`${heebo.className} uppercase text-dark text-5xl font-bold leading-tight`}
        >
          Sandeep Kumar
        </p>
        <p className="my-4 uppercase font-semibold text-primary">
          Senior React Developer
        </p>
        <p className="text-sm">Based in New Delhi, India</p>
      </div>
      <div className="bg-white py-6 rounded-xl px-6 col-span-1 md:col-span-2 md:row-span-3">
        <p className="capitalize">Hello there!</p>
        <p
          className={`${heebo.className} uppercase text-2xl md:text-5xl text-dark py-4 text-left`}
        >
          I am{" "}
          <span className="font-extrabold text-primary">Sandeep Kumar</span>, A
          Frontend Developer Crafting high-performance, user-friendly web
          applications with{" "}
          <span className="font-bold text-primary">React</span>.
        </p>
        <p className="flex items-center gap-2">
          <span className="h-4 w-4 bg-primary block rounded-full"></span>
          Available For Hiring
        </p>
        <button className="bg-primary text-white mt-4 px-10 py-2 rounded-xl flex items-center gap-1 hover:bg-white hover:text-primary border border-primary">
          Download CV <MdFileDownload />
        </button>
      </div>
      <div
        className="bg-white py-6 rounded-xl px-6 overflow-hidden col-span-1 md:col-span-2 md:row-span-1"
        id="about"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="capitalize tracking-widest">
          I'm a <b className="text-primary">Frontend Developer</b> with 2 years
          of experience, specializing in
          <b className="text-primary"> React</b>. With expertise in HTML, CSS,
          and <b className="text-primary">JavaScript</b>, I craft
          high-performance, user-centric web applications. Passionate about
          <b className="text-primary"> clean code, optimization</b>, and
          delivering seamless UI/UX experiences.
        </div>
      </div>
    </section>
  );
};

export default SIntro;
