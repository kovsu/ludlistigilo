import { useState } from "react";

function Input() {
  const [input, setInput] = useState("")

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  function clearInput() {
    setInput("")
  }

  const isEmpty = input === "";

  return (
    <div flex="~ items-center gap-8" m="y-12">
      <div flex="~ justify-center items-center" className="relative flex-1">
        <input
          font="mono placeholder:italic"
          border="rounded-lg solid black border-2" 
          p={`x-4 ${isEmpty ? '' : 'r-12'}`}
          className="outline-none border-none text-xl w-full h-14" 
          type="text" placeholder="Please input playlist link..." 
          onChange={handleInput}
          value={input}
        />
        {
          isEmpty ? null : (
            <div className="transition rounded-xl hover:bg-gray-100 absolute right-3">
              <div
                className="i-carbon-close cursor-pointer" 
                text="xl gray-400"
                onClick={clearInput}
              />
            </div>
          )
        }
      </div>
      <button 
        className="w-24 outline-none text-4 cursor-pointer self-stretch bg-primary tracking-wider transition duration-300 hover:shadow-lg"
        border="rounded-lg solid black border-2"
        text="xl white"
        font="mono"
      >
        Go!
      </button>
    </div>
  );
}

export default Input;
