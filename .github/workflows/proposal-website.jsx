
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProposalPage() {
  const [showProposal, setShowProposal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 p-6 flex flex-col items-center justify-center space-y-6">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-center text-rose-700"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey Muskan,
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-center max-w-2xl text-rose-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        From the moment we met, life became sweeter, brighter, and a lot more fun. I’ve laughed harder, smiled wider, and felt more loved than ever before. This is for you.
      </motion.p>

      {!showProposal && (
        <Button 
          className="bg-rose-600 text-white px-6 py-3 text-lg rounded-2xl shadow-lg hover:bg-rose-700"
          onClick={() => setShowProposal(true)}
        >
          Open Your Surprise
        </Button>
      )}

      {showProposal && (
        <motion.div 
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white shadow-xl p-6 rounded-2xl">
            <CardContent>
              <Sparkles className="mx-auto text-rose-500" size={40} />
              <h2 className="text-3xl font-bold text-rose-700 mt-4">Will You Marry Me?</h2>
              <p className="text-lg text-rose-600 mt-2">I promise to laugh with you, grow with you, and love you—always.</p>
              <div className="mt-6 flex justify-center space-x-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-2 rounded-full">Yes!</Button>
                <Button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full">Umm...</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
