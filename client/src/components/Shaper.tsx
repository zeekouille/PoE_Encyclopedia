// Shaper2.tsx
import React, {  useState, useCallback } from "react";

import Layout from "./Layout"; // Importez le composant Layout
import fragmentOfChimera from "../image/FragmentChimera.png";
import fragmentOfPhoenix from "../image/FragmentPhoenix.png";
import fragmentOfMinotaur from "../image/FragmentMinotaur.png";
import fragmentOfHydra from "../image/FragmentHydra.png";
import fragmentOfShapeImage from "../image/FragmentOfShape.png";
import fragmentOfKnowledgeImage from "../image/FragmentOfKnowledge.png";
import dyingSunImage from "../image/DyingSun.png";
import voidWalkerImage from "../image/Voidwalker.png";
import solsticeVigilImage from "../image/SolsticeVigil.png";
import shapersTouchImage from "../image/ShapersTouch.png";
import orbOfDominanceImage from "../image/OrbOfDominance.png";
import "./Shaper.css";

interface Prices {
  fragmentOfHydra: number;
  fragmentOfPhoenix: number;
  fragmentOfChimera: number;
  fragmentOfMinotaur: number;
  fragmentOfKnowledge: number;
  fragmentOfShape: number;
  orbOfDominance: number;
  shapersTouch: number;
  solsticeVigil: number;
  dyingSun: number;
  voidWalker: number;
}

export default function Shaper2() {
  const [prices, setPrices] = useState<Prices>({
    fragmentOfHydra: 0,
    fragmentOfPhoenix: 0,
    fragmentOfChimera: 0,
    fragmentOfMinotaur: 0,
    fragmentOfKnowledge: 0,
    fragmentOfShape: 0,
    orbOfDominance: 0,
    shapersTouch: 0,
    solsticeVigil: 0,
    dyingSun: 0,
    voidWalker: 0,
  });

  const [profitPerShaper, setProfitPerShaper] = useState<number | null>(0);
 
  const handlePriceChange = (itemName: keyof Prices, value: number) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [itemName]: value,
    }));
  };

  const calculateAndSetProfitPerShaper = useCallback(() => {
    let allRewardPrice = 0;
    let pricePerRun = 0;

    Object.entries(prices).forEach(([itemName, value], index) => {
      if (index < 4) {
        pricePerRun += value;
      } else {
        if (itemName === "solsticeVigil") {
          value *= 0.0518;
        } else if (itemName === "fragmentOfShape") {
          value *= 0.5;
        } else if (itemName === "fragmentOfKnowledge") {
          value *= 0.5;
        } else if (itemName === "orbOfDominance") {
          value *= 0.025;
        } else if (itemName === "voidWalker") {
          value *= 0.2428;
        } else if (itemName === "dyingSun") {
          value *= 0.161;
        } else if (itemName === "shapersTouch") {
          value *= 0.512;
        }
        allRewardPrice += value;
      }
    });

    const profitPerShaper = allRewardPrice - pricePerRun;
    setProfitPerShaper(profitPerShaper);
  }, [prices]);

  

   

  const renderPriceInput = (
    name: keyof Prices,
    value: number,
    imageSrc: string
  ) => (
    <div key={name} className="priceInputContainer">
      <img src={imageSrc} alt={name} className="smallImage" />
      <input
        type="number"
        value={value}
        onChange={(e) => handlePriceChange(name, Number(e.target.value))}
      />
    </div>
  );

  return (
    <Layout>
      
     
      <p>Cost per run :</p>
      <div className="priceRow">
        {renderPriceInput(
          "fragmentOfHydra",
          prices.fragmentOfHydra,
          fragmentOfHydra
        )}
        {renderPriceInput(
          "fragmentOfPhoenix",
          prices.fragmentOfPhoenix,
          fragmentOfPhoenix
        )}
      </div>
      <div className="priceRow">
        {renderPriceInput(
          "fragmentOfChimera",
          prices.fragmentOfChimera,
          fragmentOfChimera
        )}
        {renderPriceInput(
          "fragmentOfMinotaur",
          prices.fragmentOfMinotaur,
          fragmentOfMinotaur
        )}
      </div>

      <p>
        Total cost per run:{" "}
        {prices.fragmentOfHydra +
          prices.fragmentOfPhoenix +
          prices.fragmentOfChimera +
          prices.fragmentOfMinotaur}
      </p>

      <p>Reward prices:</p>
      <p>Guaranteed:</p>
      {renderPriceInput(
        "fragmentOfKnowledge",
        prices.fragmentOfKnowledge,
        fragmentOfKnowledgeImage
      )}
      {renderPriceInput(
        "fragmentOfShape",
        prices.fragmentOfShape,
        fragmentOfShapeImage
      )}

      <p>Variable drops:</p>
      {renderPriceInput("dyingSun", prices.dyingSun, dyingSunImage)}
      {renderPriceInput("voidWalker", prices.voidWalker, voidWalkerImage)}
      {renderPriceInput(
        "solsticeVigil",
        prices.solsticeVigil,
        solsticeVigilImage
      )}
      {renderPriceInput("shapersTouch", prices.shapersTouch, shapersTouchImage)}
      {renderPriceInput(
        "orbOfDominance",
        prices.orbOfDominance,
        orbOfDominanceImage
      )}

      <button onClick={calculateAndSetProfitPerShaper}>Calculate Profit</button>
      <p>Profit per shaper: {profitPerShaper} chaos</p>
    </Layout>
  );
}
