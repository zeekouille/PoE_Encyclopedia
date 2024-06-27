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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handlePriceChange = (itemName: keyof Prices, value: number) => {
    setPrices(prevPrices => ({
      ...prevPrices,
      [itemName]: value,
    }));
  };

  const calculateAndSetProfitPerShaper = useCallback(() => {
    // Accumulate total price of all items
    let allRewardPrice = 0;
    let pricePerRun = 0;
  
    // Iterate through the entries of the prices object
    Object.entries(prices).forEach(([itemName, value], index) => {
      if (index < 4) { // Include items at index 0 to 3 for price per run
        pricePerRun += value;
      } else { // Exclude items at index 0 to 3 for reward price
        if (itemName === "solsticeVigil") {
          value *= 0.0518; // Multiply by 0.0518 if item is solsticeVigil
          
        }  else if (itemName === "fragmentOfShape") {
            // Ajoutez ici la logique spécifique pour "fragmentOfShape" si nécessaire
            // Par exemple, multipliez par un autre facteur ou appliquez une autre transformation
            value *= 0.5; // Exemple : multiplier par 0.1
          }  else if (itemName === "fragmentOfKnowledge") {
            // Ajoutez ici la logique spécifique pour "fragmentOfShape" si nécessaire
            // Par exemple, multipliez par un autre facteur ou appliquez une autre transformation
            value *= 0.5; // Exemple : multiplier par 0.1
          }  else if (itemName === "orbOfDominance") {
            // Ajoutez ici la logique spécifique pour "fragmentOfShape" si nécessaire
            // Par exemple, multipliez par un autre facteur ou appliquez une autre transformation
            value *= 0.025; // Exemple : multiplier par 0.1
          }  else if (itemName === "voidWalker") {
            // Ajoutez ici la logique spécifique pour "fragmentOfShape" si nécessaire
            // Par exemple, multipliez par un autre facteur ou appliquez une autre transformation
            value *= 0.2428; // Exemple : multiplier par 0.1
          }  else if (itemName === "dyingSun") {
            // Ajoutez ici la logique spécifique pour "fragmentOfShape" si nécessaire
            // Par exemple, multipliez par un autre facteur ou appliquez une autre transformation
            value *= 0.161; // Exemple : multiplier par 0.1
          }  else if (itemName === "shapersTouch") {
            // Ajoutez ici la logique spécifique pour "fragmentOfShape" si nécessaire
            // Par exemple, multipliez par un autre facteur ou appliquez une autre transformation
            value *= 0.512; // Exemple : multiplier par 0.1
          }
        allRewardPrice += value;
      }
    });
  
    // Calculate profit per shaper
    const profitPerShaper = allRewardPrice - pricePerRun;
  
    // Update state with the calculated profit per shaper
    setProfitPerShaper(profitPerShaper);
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
  }, [prices]);

  const renderPriceInput = (name: keyof Prices, value: number, imageSrc: string) => (
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
    <>
     <div className="App">
      <div className="sidebar">
        <h2>Navigation</h2>
        <ul>
          <li>
            <a href="#crafting">Crafting</a>
            <ul>
            <li><a href="/bow/chaosdotbow" className="sub-link">Chaos Dot Bow</a></li>
            </ul>
          </li>
          <li className="separator"></li>
          <li>
            <a href="#boss-profit">Boss Profit</a>
            <ul>
              <li><a href="/bossprofit/shaper" className="sub-link">Shaper</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-content">
      {loading && <p>Chargement en cours...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <p style={{ color: 'green' }}>API chargée avec succès</p>}

      <p>Cost per run :</p>
      <div className="priceRow">
          {renderPriceInput('fragmentOfHydra', prices.fragmentOfHydra, fragmentOfHydra)}
          {renderPriceInput('fragmentOfPhoenix', prices.fragmentOfPhoenix, fragmentOfPhoenix)}
        </div>
        <div className="priceRow">
      {renderPriceInput('fragmentOfChimera', prices.fragmentOfChimera, fragmentOfChimera)}
      {renderPriceInput('fragmentOfMinotaur', prices.fragmentOfMinotaur, fragmentOfMinotaur)}
      </div>

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
      <p>Profit per shaper: {profitPerShaper} chaos</p>
      </div>
    </div>


 
   
    </>
  );
}
