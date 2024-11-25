"use client";
import { useState } from "react";

const LandingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="relative min-h-screen bg-cover bg-bg bg-center flex flex-col items-center font-mono">
      <div className="bg-black bg-opacity-70 text-3xl text-white text-center w-full py-2 font-bold">
        Your Gaming Experience Elevated
      </div>

      <h1 className="text-white text-3xl font-extrabold text-center mt-8">
        Get the Ultimate Gaming Laptop <br /> Starting Now
      </h1>

      <ul className="mt-6 text-white text-base space-y-3 text-center px-4">
        <li>🎮 Unmatched performance for gamers</li>
        <li>⚡ Easy monthly installments</li>
        <li>🚚 Free worldwide shipping</li>
        <li>💳 0% initial deposit</li>
      </ul>

      <button
        onClick={toggleModal}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-bold hover:bg-purple-700"
      >
        Get Yours Now
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm shadow-xl">
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Leave Your Request
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md px-4 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-md px-4 py-2 text-sm"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border rounded-md px-4 py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-bold hover:bg-purple-700"
              >
                Submit
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl font-bold"
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
