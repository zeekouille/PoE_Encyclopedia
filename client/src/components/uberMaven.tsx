import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useData } from "./dataContext";

// Définir un type pour les URLs des icônes
interface ItemIcons {
  realityFragment: string;
  viridisVeil: string;
  progenesis: string;
  curioOfPotential: string;
  shinyReliquaryKey: string;
  orbOfConflict: string,

}

export const UberMaven = () => {
  const { data } = useData();
  
  // Utiliser un nom différent pour les URLs des icônes
  const [itemIcons, setItemIcons] = useState<ItemIcons>({
    realityFragment: "",
    viridisVeil: "",
    progenesis: "",
    curioOfPotential: "",
    shinyReliquaryKey: "",
    orbOfConflict: "",
 
  });

  const [itemPrices, setItemPrices] = useState<{
    [itemName: string]: number | 0;
  }>({
    realityFragment: 0,
    viridisVeil: 0,
    progenesis: 0,
    curioOfPotential: 0,
    shinyReliquaryKey: 0,
    orbOfConflict: 0,

  });

  useEffect(() => {
    const itemsToFetch = [
      { itemName: "Reality Fragment", stateKey: "realityFragment" },
      { itemName: "Viridi's Veil", stateKey: "viridisVeil" },
      { itemName: "Progenesis", stateKey: "progenesis" },
      { itemName: "Curio of Potential", stateKey: "curioOfPotential" },
      { itemName: "Shiny Reliquary Key", stateKey: "shinyReliquaryKey" },
      { itemName: "Orb of Conflict", stateKey: "orbOfConflict" },
    
    ];

    const newPrices: { [key: string]: number } = {};
    const newIcons: Partial<ItemIcons> = { ...itemIcons }; // Copie de l'état actuel des icônes

    itemsToFetch.forEach((item) => {
      const itemData = data.find((d) => d.name === item.itemName);
      if (itemData) {
        newPrices[item.stateKey] = itemData.mean;
        newIcons[item.stateKey as keyof ItemIcons] = itemData.icon; // Utilisez keyof ItemIcons pour accéder aux clés correctement
      }
    });

    setItemPrices((prevState) => ({
      ...prevState,
      ...newPrices,
    }));

    setItemIcons(newIcons as ItemIcons); // Mettre à jour l'état des icônes
  }, [data]);

  const [profitPerBoss, setProfitPerBoss] = useState<number>(0);

  const calculateProfitPerBoss = () => {
    const pricePerRun = itemPrices.realityFragment * 5;
    const rewardPerRun =
      itemPrices.viridisVeil * 0.55 +
      itemPrices.progenesis * 0.11 +
      itemPrices.orbOfConflict * 0.35 +
      itemPrices.curioOfPotential * 0.05 ;



    const profitPerBoss = rewardPerRun - pricePerRun;
    console.log("Profit per boss:", profitPerBoss);

    setProfitPerBoss(profitPerBoss);
  };

  return (
    <Layout>
      <div>Maven</div>
      {Object.keys(itemPrices).map((key) => (
        <div key={key}>
          <p>{key}</p>
          <p>{itemPrices[key]}</p>
          {itemIcons[key as keyof ItemIcons] && (
            <img src={itemIcons[key as keyof ItemIcons]} alt={`${key} icon`} />
          )}
        </div>
      ))}

      <button onClick={calculateProfitPerBoss}>Calculate profit</button>

      <p>Reward per boss</p>
      <p>{profitPerBoss}</p>
    </Layout>
  );
};

export default UberMaven;