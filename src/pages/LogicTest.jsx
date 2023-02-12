import React, { useState } from "react";
import "./style.css";

export default function LogicTest() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [gradeDesc, setGradeDesc] = useState("");
  const [previousGrades, setPreviousGrades] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "score") {
      setScore(value);
    }
  };

  const handleGradeCalculation = () => {
    const numericScore = Number(score);
    if (numericScore < 0 || numericScore > 100) {
      setGradeDesc("Invalid Score");
    } else if (numericScore >= 80) {
      setGradeDesc(`Nilai ${name} mendapatkan nilai A`);
    } else if (numericScore >= 65) {
      setGradeDesc(`Nilai ${name} mendapatkan nilai B`);
    } else if (numericScore >= 50) {
      setGradeDesc(`Nilai ${name} mendapatkan nilai C`);
    } else if (numericScore >= 35) {
      setGradeDesc(`Nilai ${name} mendapatkan nilai D`);
    } else {
      setGradeDesc(`Nilai ${name} mendapatkan nilai E`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGradeCalculation();
    setPreviousGrades([...previousGrades, gradeDesc]);
    setName("");
    setScore("");
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="font-bold text-xl text-underline">
        Teacher Input Grading
      </h1>
      <form onSubmit={handleSubmit} className="my-5">
        <div className="flex flex-col gap-4 min-w-[400px] bg-teal-500 p-4 rounded-md">
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="font-semibold ">
              Name{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border py-1 px-2 rounded-md w-5/6"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="score" className="font-semibold">
              Score{" "}
            </label>
            <input
              type="number"
              name="score"
              id="score"
              className="border py-1 px-2 rounded-md w-5/6"
              value={score}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-slate-200 rounded-md w-36 py-2 font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {gradeDesc && (
        <div className="flex flex-col gap-2">
          <h1>Baru*</h1>
          <div className="bg-green-400 w-[400px] py-2 pl-10 rounded-md">
            {gradeDesc}
          </div>
          <h1>Daftar sebelum </h1>
          <ul className="bg-yellow-400 w-[400px] rounded-md py-2 pl-10 leading-loose">
            {previousGrades.map((grade, index) => (
              <li key={index}>{grade}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
