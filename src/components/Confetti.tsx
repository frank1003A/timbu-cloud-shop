"use client";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const ReactConfetti = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        tweenDuration={5500}
        recycle={false}
        numberOfPieces={500}
      />
    </>
  );
};

export default ReactConfetti;
