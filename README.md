import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

function App() {
  const [showProposal, setShowProposal] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 p-6 flex flex-col items-center justify-center text-center">
      {showProposal && (
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} />
      )}

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-rose-700"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Dear Muskan Kaur ❤️
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mt-4 text-rose-800 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Ever since I met you, every day has felt like spring—full of warmth, color, and laughter.  
        Your smile is my favorite sunrise, your voice is my favorite melody,  
        and your presence is my favorite place in the world.  
        <br />
        You are my best friend, my peace, my adventure… my forever.
        <br />
        <span className="text-2xl">Will you marry me? 💍✨</span>
      </motion.p>

      {!showProposal && (
        <button
          className="mt-8 bg-rose-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:bg-rose-700 transition"
          onClick={() => setShowProposal(true)}
        >
          Open Your Surprise 💌
        </button>
      )}

      {showProposal && (
        <motion.div
          className="mt-8 bg-white rounded-2xl shadow-xl p-6 w-full max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl mb-4">💖💫</div>
          <h2 className="text-3xl font-bold text-rose-700">Muskan, will you be mine forever?</h2>
          <p className="mt-2 text-rose-600 text-lg">
            I promise to love you, laugh with you, grow with you, and stand by you always.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-2 rounded-full">
              Yes, forever!
            </button>
            <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full">
              I need a hug first!
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
