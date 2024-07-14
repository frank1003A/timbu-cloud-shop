"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const ThankyouPage = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    setIsExploding(true);
  }, []);
  return (
    <div className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {isExploding && <ReactConfetti />}
      <Image
        src={"/assets/hand.jpg"}
        alt="hand of love"
        height={400}
        width={400}
      />
      <span className="text-wprimary mt-5">Thank you for shopping with us</span>
      <Link href={"/"}>
        <Button className="bg-wprimary hover:bg-wprimary text-white hover:text-white mt-5">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
};

export default ThankyouPage;
