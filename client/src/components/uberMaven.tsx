import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useData } from "./dataContext";
import './bossProfitStyles.css'; // Assurez-vous d'importer votre fichier CSS

interface ItemIcons {
  realityFragment: string;
  viridisVeil: string;
  progenesis: string;
  curioOfPotential: string;
  shinyReliquaryKey: string;
  orbOfConflict: string;
}

const UberMaven = () => {
  const { data } = useData();

  const [itemIcons, setItemIcons] = useState<ItemIcons>({
    realityFragment: "",
    viridisVeil: "",
    progenesis: "",
    curioOfPotential: "",
    shinyReliquaryKey: "",
    orbOfConflict: "",
  });

  const [itemPrices, setItemPrices] = useState<{
    [itemName: string]: number;
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
    const newIcons: Partial<ItemIcons> = { ...itemIcons };

    itemsToFetch.forEach((item) => {
      const itemData = data.find((d) => d.name === item.itemName);
      if (itemData) {
        newPrices[item.stateKey] = itemData.mean;
        newIcons[item.stateKey as keyof ItemIcons] = itemData.icon;
      }
    });

    setItemPrices((prevState) => ({
      ...prevState,
      ...newPrices,
    }));

    setItemIcons(newIcons as ItemIcons);
  }, [data]);

  const [profitPerBoss, setProfitPerBoss] = useState<number>(0);

  const calculateProfitPerBoss = () => {
    const pricePerRun = itemPrices.realityFragment * 5;
    const rewardPerRun =
      itemPrices.viridisVeil * 0.55 +
      itemPrices.progenesis * 0.11 +
      itemPrices.orbOfConflict * 0.35 +
      itemPrices.curioOfPotential * 0.05;

    const profitPerBoss = rewardPerRun - pricePerRun;
    console.log("Profit per boss:", profitPerBoss);

    setProfitPerBoss(profitPerBoss);
  };

  const handlePriceChange = (itemName: string, value: string) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setItemPrices((prevPrices) => ({
        ...prevPrices,
        [itemName]: parsedValue,
      }));
    }
  };

  return (
    <Layout>
      <div className="centered-text">Uber Maven</div>
      <table className="centered-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Icon</th>
            <th>Price</th>
            <th>Set Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(itemPrices).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {itemIcons[key as keyof ItemIcons] && (
                  <img
                    src={itemIcons[key as keyof ItemIcons]}
                    alt={`${key} icon`}
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
              </td>
              <td>{itemPrices[key]}</td>
              <td>
                <input
                  type="number"
                  value={itemPrices[key]}
                  onChange={(e) => handlePriceChange(key, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        style={{ textAlign: "center", display: "block", margin: "0 auto" }}
        onClick={calculateProfitPerBoss}
      >
        Calculate profit
      </button>

      <p className="centered-text">Reward per boss</p>
      <p className="centered-text">{profitPerBoss}</p>
    </Layout>
  );
};

export default UberMaven;
