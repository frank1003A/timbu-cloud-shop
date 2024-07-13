"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const ThankyouPage = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    setIsExploding(true);
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
      {isExploding && <ReactConfetti />}
      <Image
        src={"/assets/hand.jpg"}
        alt="hand of love"
        height={400}
        width={400}
      />
      <span className="text-wprimary mt-5">Thank you for shopping with us</span>
    </div>
  );
};

export default ThankyouPage;
