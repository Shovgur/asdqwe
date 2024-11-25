"use client";

import { useState } from "react";

type Answers = Record<number, string>;

const LandingPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>({});

  const toggleModal = (): void => {
    setModalOpen(!isModalOpen);
    setStep(1);
    setAnswers({});
  };

  const handleNext = (): void => {
    if (!answers[step]) {
      alert("Please select an option to proceed.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = (): void => {
    if (step === 1) {
      toggleModal();
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleAnswerChange = (value: string): void => {
    setAnswers((prev) => ({ ...prev, [step]: value }));
  };

  return (
    <div className="relative min-h-screen bg-cover bg-bg bg-center flex flex-col items-center font-mono">
      <div className="bg-black bg-opacity-70 text-3xl text-white text-center w-full py-2 font-bold">
        Your Gaming Experience Elevated
      </div>

      <h1 className="text-white text-3xl font-extrabold text-center mt-8">
        Get the Ultimate Gaming Laptop <br /> Starting Now
      </h1>

      <ul className="mt-6 text-white text-xl space-y-3 text-center px-4">
        <li>🎮 Unmatched performance for gamers</li>
        <li>⚡ Easy monthly installments</li>
        <li>🚚 Free worldwide shipping</li>
        <li>💳 0% initial deposit</li>
      </ul>

      <button
        onClick={toggleModal}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-bold hover:bg-purple-700 focus:outline-none"
      >
        Get Yours Now
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm shadow-xl">
            {step === 1 && (
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  What type of games do you play most?
                </h2>
                <form className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="game-type"
                      value="action"
                      checked={answers[1] === "action"}
                      onChange={() => handleAnswerChange("action")}
                      className="mr-2 focus:outline-none"
                    />
                    Action
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="game-type"
                      value="rpg"
                      checked={answers[1] === "rpg"}
                      onChange={() => handleAnswerChange("rpg")}
                      className="mr-2 focus:outline-none"
                    />
                    RPG
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="game-type"
                      value="sports"
                      checked={answers[1] === "sports"}
                      onChange={() => handleAnswerChange("sports")}
                      className="mr-2 focus:outline-none"
                    />
                    Sports
                  </label>
                </form>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  How often do you upgrade your gear?
                </h2>
                <form className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="upgrade-frequency"
                      value="every-year"
                      checked={answers[2] === "every-year"}
                      onChange={() => handleAnswerChange("every-year")}
                      className="mr-2 focus:outline-none"
                    />
                    Every Year
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="upgrade-frequency"
                      value="every-2-years"
                      checked={answers[2] === "every-2-years"}
                      onChange={() => handleAnswerChange("every-2-years")}
                      className="mr-2 focus:outline-none"
                    />
                    Every 2 Years
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="upgrade-frequency"
                      value="rarely"
                      checked={answers[2] === "rarely"}
                      onChange={() => handleAnswerChange("rarely")}
                      className="mr-2 focus:outline-none"
                    />
                    Rarely
                  </label>
                </form>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  Leave Your Contact Information
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-bold hover:bg-purple-700 focus:outline-none"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}

            {step < 3 && (
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrev}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none"
                >
                  Next
                </button>
              </div>
            )}

            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl font-bold focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
