import { useState } from "react";

export default function NameComponent({ SetName }) {
  const [input, SetInput] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form className="flex flex-col justify-center items-center space-y-2 bg-gray-800 py-10 w-auto text-white px-10 rounded-lg">
        <div className="flex space-x-4">
          <label className="mt-1">Name</label>
          <input
            autoFocus
            className="border border-black rounded-md px-1 py-1 text-black"
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(e) => {
              SetInput(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 px-2 text-white py-1 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            SetName(input);
          }}
        >
          Done
        </button>
      </form>
    </div>
  );
}
