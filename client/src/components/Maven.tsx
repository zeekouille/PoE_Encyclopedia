import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useData } from "./dataContext";

// Définir un type pour les URLs des icônes
interface ItemIcons {
  mavensWrit: string;
  orbOfConflict: string;
  legacyOfFury: string;
  gravensSecret: string;
  arnsAnguish: string;
  oleysasDelight: string;
  doppelgangerGuise: string;
  echoForge: string;
  // Ajoutez d'autres clés au besoin
}

export const Maven = () => {
  const { data } = useData();
  
  // Utiliser un nom différent pour les URLs des icônes
  const [itemIcons, setItemIcons] = useState<ItemIcons>({
    mavensWrit: "",
    orbOfConflict: "",
    legacyOfFury: "",
    gravensSecret: "",
    arnsAnguish: "",
    oleysasDelight: "",
    doppelgangerGuise: "",
    echoForge: "",
    // Initialisez avec des valeurs vides ou des URLs par défaut
  });

  const [itemPrices, setItemPrices] = useState<{
    [itemName: string]: number | 0;
  }>({
    mavensWrit: 0,
    orbOfConflict: 0,
    legacyOfFury: 0,
    gravensSecret: 0,
    arnsAnguish: 0,
    oleysasDelight: 0,
    doppelgangerGuise: 0,
    echoForge: 0,
  });

  useEffect(() => {
    const itemsToFetch = [
      { itemName: "The Maven's Writ", stateKey: "mavensWrit" },
      { itemName: "Legacy of Fury", stateKey: "legacyOfFury" },
      { itemName: "Orb of Conflict", stateKey: "orbOfConflict" },
      { itemName: "Graven's Secret", stateKey: "gravensSecret" },
      { itemName: "Arn's Anguish", stateKey: "arnsAnguish" },
      { itemName: "Olesya's Delight", stateKey: "oleysasDelight" },
      { itemName: "Doppelgänger Guise", stateKey: "doppelgangerGuise" },
      { itemName: "Echoforge", stateKey: "echoForge" },
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
    const pricePerRun = itemPrices.mavensWrit;
    const rewardPerRun =
      itemPrices.orbOfConflict * 0.35 +
      itemPrices.legacyOfFury * 0.45 +
      itemPrices.gravensSecret * 0.16 +
      itemPrices.arnsAnguish * 0.16 +
      itemPrices.oleysasDelight * 0.16 +
      itemPrices.doppelgangerGuise * 0.06 +
      itemPrices.echoForge * 0.01;

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

export default Maven;