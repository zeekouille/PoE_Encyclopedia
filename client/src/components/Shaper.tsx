import React, { useEffect, useState } from 'react';
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
import shapersTouchImage from '../image/ShapersTouch.png'
import './Shaper.css';

export default function Shaper() {
  const [timePerRun, setTimePerRun] = useState<number>(0);
  const [fragmentOfKnowledgePrice, setFragmentOfKnowledgePrice] = useState<number>(0);
  const [fragmentOfShapePrice, setFragmentOfShapePrice] = useState<number>(0);
  const [starforge, setStarforge] = useState<number>(350);
  const [profitPerShaper, setProfitPerShaper] = useState<number | null>(0);

  const [costPerRun, setCostPerRun] = useState<number>(0);
  const [fragmentOfHydraPrice, setFragmentOfHydraPrice] = useState<number>(0);
  const [fragmentOfPhoenixPrice, setFragmentOfPhoenixPrice] = useState<number>(0);
  const [fragmentOfChimeraPrice, setFragmentOfChimeraPrice] = useState<number>(0);
  const [fragmentOfMinotaurPrice, setFragmentOfMinotaurPrice] = useState<number>(0);



  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour calculer et mettre à jour le profit par shaper
  const calculateAndSetProfitPerShaper = () => {
    // Remplacez fragmentOfKnowledgePrice et fragmentOfShapePrice par les valeurs appropriées
    const newProfitPerShaper = ((fragmentOfKnowledgePrice + fragmentOfShapePrice) / 2 - fragmentOfChimeraPrice - fragmentOfHydraPrice - fragmentOfMinotaurPrice - fragmentOfPhoenixPrice);
    setProfitPerShaper(newProfitPerShaper);
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
      <div>
        <img src={fragmentOfHydra} alt="Fragment of Hydra" className="smallImage" />
        <input
          type="number"
          value={fragmentOfHydraPrice}
          onChange={(e) => setFragmentOfHydraPrice(Number(e.target.value))}
        />

      </div>
      <div>
        <img src={fragmentOfPhoenix} alt="Fragment of Phoenix" className="smallImage" />
        <input
          type="number"
          value={fragmentOfPhoenixPrice}
          onChange={(e) => setFragmentOfPhoenixPrice(Number(e.target.value))}
        />
      </div>

      <div>
        <img src={fragmentOfChimera} alt="Fragment of Chimera" className="smallImage" />
        <input
          type="number"
          value={fragmentOfChimeraPrice}
          onChange={(e) => setFragmentOfChimeraPrice(Number(e.target.value))}
        />
      </div>

      <div>
        <img src={fragmentOfMinotaur} alt="Fragment of Minotaur" className="smallImage" />
        <input
          type="number"
          value={fragmentOfMinotaurPrice}
          onChange={(e) => setFragmentOfMinotaurPrice(Number(e.target.value))}
        />
      </div>

      <p>Total cost per run : {costPerRun}</p>
      <p>Reward prices : </p>
      <p>Guarenteed :</p>
      <div>
        <img src={fragmentOfKnowledgeImage} alt="Fragment of Knowledge" className="smallImage" />
        <input
          type="number"
          value={fragmentOfKnowledgePrice}
          onChange={(e) => setFragmentOfKnowledgePrice(Number(e.target.value))}
        />
      </div>

      <div>
        <img src={fragmentOfShapeImage} alt="Fragment of Shape" className="smallImage" />
        <input
          type="number"
          value={fragmentOfShapePrice}
          onChange={(e) => setFragmentOfShapePrice(Number(e.target.value))}
        />
      </div>

      <p>Variable drops : </p>
      <div>
        <img src={dyingSunImage} alt="Dying Sun" className="mediumImage" />
        <input
          type="number"
          value={fragmentOfShapePrice}
          onChange={(e) => setFragmentOfShapePrice(Number(e.target.value))}
        />
      </div>
      <div>
        <img src={voidWalkerImage} alt="Voidwalker" className="smallImage" />
        <input
          type="number"
          value={fragmentOfShapePrice}
          onChange={(e) => setFragmentOfShapePrice(Number(e.target.value))}
        />
      </div>
      <div>
        <img src={solsticeVigilImage} alt="Solstice Vigil" className="smallImage" />
        <input
          type="number"
          value={fragmentOfShapePrice}
          onChange={(e) => setFragmentOfShapePrice(Number(e.target.value))}
        />
      </div>
      <div>
        <img src={shapersTouchImage} alt="Shaper's Touch" className="smallImage" />
        <input
          type="number"
          value={fragmentOfShapePrice}
          onChange={(e) => setFragmentOfShapePrice(Number(e.target.value))}
        />
      </div>





      <button onClick={calculateAndSetProfitPerShaper}>Calculate Profit</button>


      <p>Profit per shaper</p>

      {profitPerShaper}


    </>
  );
};