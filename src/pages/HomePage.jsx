import React from "react";
import ulin from "../assets/ulin.webp";
import "./style.css";

export default function HomePage() {
  return (
    <div className="flex h-[80vh] justify-center gap-5 items-center">
      <div className="flex flex-col w-1/2">
        <h1 className="text-2xl font-bold">
          <em>Hello</em>, 👋 I'm Ulin
        </h1>
        <h2 className="text-3xl font-bold">Front-End Software Engineer</h2>
        <p className="mt-5">
          My name is Aldilla Ulinnaja, I am a Informatics Engineering student
          with interests and expertise in web development, UI design, and 3D
          modeling. I possess strong knowledge and skills in web programming and
          user interface design, making websites and applications user-friendly
          and visually appealing. Additionally, I am proficient in 3D modeling
          which helps me create realistic and impressive visuals. I am
          constantly striving to improve my skills and knowledge through
          training and personal projects.{" "}
          <span className="mt-5 text-underline font-medium">
            <a href="https://ulinnaja-aldi.vercel.app" target="blank">
              See my complete portfolio
            </a>
          </span>
        </p>
      </div>
      <div className="min-w-[250px] w-[250px]">
        <img src={ulin} alt="ulin" />
      </div>
    </div>
  );
}
