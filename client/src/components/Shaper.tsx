import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import fragmentOfChimera from '../image/FragmentChimera.png';
import fragmentOfPhoenix from '../image/FragmentPhoenix.png';
import fragmentOfMinotaur from '../image/FragmentMinotaur.png';
import fragmentOfHydra from '../image/FragmentHydra.png';
import fragmentOfShapeImage from '../image/FragmentOfShape.png';
import fragmentOfKnowledgeImage from '../image/FragmentOfKnowledge.png';
import dyingSunImage from '../image/DyingSun.png';
import voidWalkerImage from '../image/Voidwalker.png';
import solsticeVigilImage from '../image/SolsticeVigil.png';
import shapersTouchImage from '../image/ShapersTouch.png';
import orbOfDominanceImage from '../image/OrbOfDominance.png';
import './Shaper.css';

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

export default function Shaper() {
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handlePriceChange = (itemName: keyof Prices, value: number) => {
    setPrices(prevPrices => ({
      ...prevPrices,
      [itemName]: value,
    }));
  };

  const calculateAndSetProfitPerShaper = useCallback(() => {
    const { fragmentOfKnowledge, fragmentOfShape, fragmentOfChimera, fragmentOfHydra, fragmentOfMinotaur, fragmentOfPhoenix } = prices;
    const newProfitPerShaper = ((fragmentOfKnowledge + fragmentOfShape) / 2 - fragmentOfChimera - fragmentOfHydra - fragmentOfMinotaur - fragmentOfPhoenix);
    setProfitPerShaper(newProfitPerShaper);
  }, [prices]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('http://localhost:3010/get-shaper-prices');
        const fetchedPrices = response.data;
        setPrices({
          ...prices,
          fragmentOfHydra: fetchedPrices.fragmentOfHydraPrice,
          fragmentOfPhoenix: fetchedPrices.fragmentOfPhoenixPrice,
          fragmentOfChimera: fetchedPrices.fragmentOfChimeraPrice,
          fragmentOfMinotaur: fetchedPrices.fragmentOfMinotaurPrice,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prices', error);
        setError('Failed to fetch prices');
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const renderPriceInput = (name: keyof Prices, value: number, imageSrc: string) => (
    <div key={name}>
      <img src={imageSrc} alt={name} className="smallImage" />
      <input
        type="number"
        value={value}
        onChange={(e) => handlePriceChange(name, Number(e.target.value))}
      />
    </div>
  );

  return (
    <>
      <div>Shaper</div>
      {loading && <p>Chargement en cours...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <p style={{ color: 'green' }}>API chargée avec succès</p>}

      <p>Cost per run :</p>
      {renderPriceInput('fragmentOfHydra', prices.fragmentOfHydra, fragmentOfHydra)}
      {renderPriceInput('fragmentOfPhoenix', prices.fragmentOfPhoenix, fragmentOfPhoenix)}
      {renderPriceInput('fragmentOfChimera', prices.fragmentOfChimera, fragmentOfChimera)}
      {renderPriceInput('fragmentOfMinotaur', prices.fragmentOfMinotaur, fragmentOfMinotaur)}

      <p>Total cost per run: {prices.fragmentOfHydra + prices.fragmentOfPhoenix + prices.fragmentOfChimera + prices.fragmentOfMinotaur}</p>

      <p>Reward prices:</p>
      <p>Guaranteed:</p>
      {renderPriceInput('fragmentOfKnowledge', prices.fragmentOfKnowledge, fragmentOfKnowledgeImage)}
      {renderPriceInput('fragmentOfShape', prices.fragmentOfShape, fragmentOfShapeImage)}

      <p>Variable drops:</p>
      {renderPriceInput('dyingSun', prices.dyingSun, dyingSunImage)}
      {renderPriceInput('voidWalker', prices.voidWalker, voidWalkerImage)}
      {renderPriceInput('solsticeVigil', prices.solsticeVigil, solsticeVigilImage)}
      {renderPriceInput('shapersTouch', prices.shapersTouch, shapersTouchImage)}
      {renderPriceInput('orbOfDominance', prices.orbOfDominance, orbOfDominanceImage)}

      <button onClick={calculateAndSetProfitPerShaper}>Calculate Profit</button>
      <p>Profit per shaper: {profitPerShaper}</p>
    </>
  );
}
