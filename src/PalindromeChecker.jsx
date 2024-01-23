import { useState } from "react";
// import palindromeImg from "./assets/Plindrome.jpg"
const PalindromeChecker = () => {
  const [inputText, setInputText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = () => {
    const cleanedText = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedText = cleanedText.split("").reverse().join("");

    setIsPalindrome(cleanedText === reversedText);
  };

  return (
    <div className="flex justify-center items-center bg-[#9ca3af] h-[100vh]">
      <div className="p-4 rounded-lg shadow-2xl md:w-[400px] bg-white flex flex-col gap-2">
        <div className="flex flex-col">
          <label className="text-sm">Enter text: </label>
          <input
            type="text"
            className="text-lg p-2 rounded-md bg-slate-200"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <button onClick={checkPalindrome} className="btn btn-ghost bg-[#9ca3af]">
          Check Palindrome
        </button>
        <p className="text-center text-lg text-[#dc2626] font-bold">
          {isPalindrome
            ? <p>It is a Palindrome..!</p>
            : <p>Not a Palindrome</p>}
        </p>
      </div>
    </div>
  );
};

export default PalindromeChecker;
