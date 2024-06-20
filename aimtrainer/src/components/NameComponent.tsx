import { useState, ChangeEvent, FormEvent } from "react";

interface NameComponentProps {
  SetName: (name: string) => void;
}

export default function NameComponent({ SetName }: NameComponentProps) {
  const [input, SetInput] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        className="flex flex-col justify-center items-center space-y-2 bg-gray-800 py-10 w-auto text-white px-10 rounded-lg"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          SetName(input);
        }}
      >
        <div className="flex space-x-4">
          <label className="mt-1">Name</label>
          <input
            autoFocus
            className="border border-black rounded-md px-1 py-1 text-black"
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              SetInput(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 px-2 text-white py-1 rounded-md"
        >
          Done
        </button>
      </form>
    </div>
  );
}
