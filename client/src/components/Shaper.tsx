import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fragmentOfChimera from '../image/FragmentChimera.png';
import fragmentOfPhoenix from '../image/FragmentPhoenix.png';
import fragmentOfMinotaur from '../image/FragmentMinotaur.png';
import fragmentOfHydra from '../image/FragmentHydra.png';

export default function Shaper() {
  const [timePerRun, setTimePerRun] = useState<number>(0);
  const [fragmentOfKnowledge, setFragmentOfKnowledge] = useState<number>(303);
  const [fragmentOfShape, setFragmentOfShape] = useState<number>(350);
  const [starforge, setStarforge] = useState<number>(350);
  const [profit, setProfit] = useState<number | null>(null);

  const [costPerRun, setCostPerRun] = useState<number>(0);
  const [fragmentOfHydraPrice, setFragmentOfHydraPrice] = useState<number>(0);
  const [fragmentOfPhoenixPrice, setFragmentOfPhoenixPrice] = useState<number>(0);
  const [fragmentOfChimeraPrice, setFragmentOfChimeraPrice] = useState<number>(0);
  const [fragmentOfMinotaurPrice, setFragmentOfMinotaurPrice] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour calculer le profit par shaper
  const profitPerShaper = () => (fragmentOfKnowledge + fragmentOfShape) / 4 + starforge * 0.035;

  // Fonction pour gérer le calcul du profit
  const handleCalculateProfit = () => {
    const calculatedProfit = profitPerShaper();
    setProfit(calculatedProfit);
  };

  // Effet pour mettre à jour le coût total par run lorsque les prix des fragments changent
  useEffect(() => {
    setCostPerRun(fragmentOfHydraPrice + fragmentOfPhoenixPrice + fragmentOfChimeraPrice + fragmentOfMinotaurPrice);
  }, [fragmentOfHydraPrice, fragmentOfPhoenixPrice, fragmentOfChimeraPrice, fragmentOfMinotaurPrice]);

  // Effet pour récupérer les prix des fragments depuis l'API
  useEffect(() => {
    const fetchShaperPrices = async () => {
      try {
        const response = await axios.get('http://localhost:3010/get-shaper-prices');
        const prices = response.data;
        setFragmentOfHydraPrice(prices.fragmentOfHydraPrice);
        setFragmentOfPhoenixPrice(prices.fragmentOfPhoenixPrice);
        setFragmentOfChimeraPrice(prices.fragmentOfChimeraPrice);
        setFragmentOfMinotaurPrice(prices.fragmentOfMinotaurPrice);
        setLoading(false); // Charger l'API réussi
      } catch (error) {
        console.error('Error fetching shaper prices', error);
        setError('Failed to fetch shaper prices'); // Définir l'erreur si la requête échoue
        setLoading(false); // Charger l'API a échoué
      }
    };

    fetchShaperPrices();
  }, []);

  return (
    <>
      <div>Shaper</div>

      {loading && <p>Chargement en cours...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <p style={{ color: 'green' }}>API chargée avec succès</p>}

      <p>Cost per run :</p>
      <img src={fragmentOfHydra} alt="Fragment of Hydra" />
      <input
        type="number"
        value={fragmentOfHydraPrice}
        onChange={(e) => setFragmentOfHydraPrice(Number(e.target.value))}
      />
      <br />
      <img src={fragmentOfPhoenix} alt="Fragment of Phoenix" />
      <input
        type="number"
        value={fragmentOfPhoenixPrice}
        onChange={(e) => setFragmentOfPhoenixPrice(Number(e.target.value))}
      />
      <br />
      <img src={fragmentOfChimera} alt="Fragment of Chimera" />
      <input
        type="number"
        value={fragmentOfChimeraPrice}
        onChange={(e) => setFragmentOfChimeraPrice(Number(e.target.value))}
      />
      <br />
      <img src={fragmentOfMinotaur} alt="Fragment of Minotaur" />
      <input
        type="number"
        value={fragmentOfMinotaurPrice}
        onChange={(e) => setFragmentOfMinotaurPrice(Number(e.target.value))}
      />
      <br />
      <p>Total cost per run : {costPerRun}</p>

      <p>Time per run in sec</p>
      <input
        type="number"
        value={timePerRun}
        onChange={(e) => setTimePerRun(Number(e.target.value))}
      />

      <button onClick={handleCalculateProfit}>Calculate Profit</button>

      <p>Profit per shaper</p>
      <p>{profit !== null ? profit : 'Click the button to calculate profit'}</p>
    </>
  );
};