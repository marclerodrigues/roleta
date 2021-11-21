import { useState } from "react";
import dynamic from "next/dynamic";

const Wheel = dynamic(
  () => {
    return import("react-custom-roulette").then((mod) => mod.Wheel);
  },
  { ssr: false }
);

const data = [
  { option: "Passar batom vendada" },
  { option: "Se safou!!!" },
  { option: "Faca uma dança sensual" },
  { option: "Vire uma dose!" },
  { option: "Cante um proibidao!" },
  { option: "Pinte as unhas vendada!" },
  { option: "Passar a vez" },
];
const backgroundColors = ["#f54ec3", "#cc1696"]; //, "#0b3351", "#f9dd50"];
const fontSize = 13;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = getRandomIntInclusive(0, 6);
    console.log(newPrizeNumber);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <div className="container" onClick={handleSpinClick}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          fontSize={fontSize}
          onClick={handleSpinClick}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
    </>
  );
}
