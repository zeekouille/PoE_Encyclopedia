import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { useData } from './dataContext';

export const Maven = () => {
  const { data } = useData(); // Utilisation du hook useData pour accéder aux données
   
  const [itemPrices, setItemPrices] = useState<{ [itemName: string]: number | 0 }>({
    mavensWrit: 0,
    orbOfConflict: 0,
  });

  useEffect(() => {
    // Filtrer les données pour "The Maven's Writ" et obtenir son prix moyen
    const mavenWritData = data.find(item => item.name === "The Maven's Writ");
    if (mavenWritData) {
      setItemPrices(prevState => ({
        ...prevState,
        mavensWrit: mavenWritData.mean,
      }));
    }

    // Filtrer les données pour "Orb Of Conflict" et obtenir son prix moyen
    const orbOfConflictData = data.find(item => item.name === "Orb of Conflict");
    if (orbOfConflictData) {
      setItemPrices(prevState => ({
        ...prevState,
        orbOfConflict: orbOfConflictData.mean,
      }));
    }
  }, [data]);

  const [profitPerBoss, setProfitPerBoss] = useState<number>(0);

  const calculateProfitPerBoss = () => {
    const pricePerRun = itemPrices.mavensWrit;
    const rewardPerRun = itemPrices.orbOfConflict * 0.35;
  
  
    const profitPerBoss =  rewardPerRun- pricePerRun;
    console.log('Profit per boss:', profitPerBoss);
  
    setProfitPerBoss(profitPerBoss);
  };

  return (
    <Layout>
      <div>Maven</div>
      <p>Maven Writ price :</p>
      <p>{itemPrices.mavensWrit}</p>
      <p>Orb Of Conflict :</p>
      <p>{itemPrices.orbOfConflict}</p>

      <button onClick={calculateProfitPerBoss}>Calculate profit</button>

      <p>Reward per boss</p>
      <p>{profitPerBoss}</p>
    </Layout>
  );
};

export default Maven;
