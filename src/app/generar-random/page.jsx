"use client";

import { Open_Sans } from "next/font/google";
import { useState } from "react";
import EducationalContent from "@/components/random-generator/EducationalContent";
import RandomGeneratorForm from "@/components/random-generator/RandomGeneratorForm";
import RandomNumberDisplay from "@/components/random-generator/RandomNumberDisplay";
import SuspenseAnimation from "@/components/random-generator/SuspenseAnimation";
import ConfettiCelebration from "@/components/random-generator/ConfettiCelebration";
import { fetchRandomNumber } from "@/utils/randomGenerator";

const open = Open_Sans({ subsets: ["latin"] });

export default function RandomGeneratorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [participantCount, setParticipantCount] = useState(null);
  const [error, setError] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleGenerateNumber = async (count) => {
    setIsLoading(true);
    setError("");
    setRandomNumber(null);
    setParticipantCount(count);
    setShowConfetti(false);

    try {
      const number = await fetchRandomNumber(count);
      setRandomNumber(number);
      // Trigger confetti celebration
      setShowConfetti(true);
    } catch (err) {
      setError(
        "Error al conectar con el servicio de números aleatorios. Por favor, intenta de nuevo."
      );
      console.error("Error fetching random number:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  return (
    <main className={open.className}>
      <EducationalContent />
      <RandomGeneratorForm
        onGenerateNumber={handleGenerateNumber}
        isLoading={isLoading}
      />

      {isLoading ? (
        <SuspenseAnimation />
      ) : (
        <RandomNumberDisplay
          randomNumber={randomNumber}
          participantCount={participantCount}
          isLoading={isLoading}
          error={error}
        />
      )}

      <ConfettiCelebration
        isActive={showConfetti}
        onComplete={handleConfettiComplete}
      />
    </main>
  );
}
