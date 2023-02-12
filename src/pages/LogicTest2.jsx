import { useState } from "react";

export default function NameGroupPage() {
  const [name, setName] = useState("");
  const [submissions, setSubmissions] = useState([]);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstLetter = name.charAt(0).toLowerCase();

    let groupName;
    if (["a", "b", "c", "d"].includes(firstLetter)) {
      groupName = "In a first group";
    } else if (["e", "f", "g", "h", "i"].includes(firstLetter)) {
      groupName = "In a second group";
    } else {
      groupName = "In a last group";
    }

    setSubmissions((prevSubmissions) => [
      { name, group: groupName },
      ...prevSubmissions,
    ]);
    setName("");
  };

  const handleReset = () => {
    setSubmissions([]);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="font-bold text-xl text-underline">Group Sorting</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-end justify-center gap-4 min-w-[400px] bg-teal-500 p-4 rounded-md my-5"
      >
        <div>
          <label htmlFor="name" className="block mb-2">
            Enter your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="border px-2 py-1 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-slate-200 rounded-md w-36 px-2 py-1  font-semibold"
        >
          Submit
        </button>
      </form>
      {submissions.length > 0 && (
        <div className="w-[400px]">
          <p>Submissions:</p>
          <ul className="bg-yellow-400 w-[400px] rounded-md py-2 pl-10 leading-loose">
            {submissions.map((submission, index) => (
              <li key={index}>{`${submission.name} is ${submission.group}`}</li>
            ))}
          </ul>
        </div>
      )}
      {submissions.length > 0 && (
        <button
          className="bg-gray-300 px-2 py-1 mt-4 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
