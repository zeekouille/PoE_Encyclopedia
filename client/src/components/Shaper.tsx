import React, { useEffect, useState } from 'react';
import fragmentOfChimera from '../image/FragmentChimera.png'
import fragmentOfPhoenix from '../image/FragmentPhoenix.png'
import fragmentOfMinotaur from '../image/FragmentMinotaur.png'
import fragmentOfHydra from '../image/FragmentHydra.png'

export default function Shaper() {

  const [timePerRun, setTimePerRun] = useState<number>(0);
  const [fragmentOfKnowledge, setFragmentOfKnowledge] = useState<number>(303);
  const [fragmentOfShape, setFragmentOfShape] = useState<number>(350);
  const [starforge, setStarforge] = useState<number>(350);
  const [profit, setProfit] = useState<number | null>(null);

  const [costPerRun, setCostPerRun] = useState<number>(0);
  const [fragmentOfHydraPrice , setFragmentOfHydraPrice] = useState<number>(0);
  const [fragmentOfPhoenixPrice, setFragmentOfPhoenixPrice] = useState<number>(0);
  const [fragmentOfChimeraPrice, setFragmentOfChimeraPrice] = useState<number>(0);
  const [fragmentOfMinotaurPrice, setFragmentOfMinotaurPrice] = useState<number>(0);

  const profitPerShaper = () =>
    (fragmentOfKnowledge + fragmentOfShape) / 4 + starforge * 0.035;

  const handleCalculateProfit = () => {
    const calculatedProfit = profitPerShaper();
    setProfit(calculatedProfit);
  };

  useEffect(() => {
    setCostPerRun(fragmentOfHydraPrice + fragmentOfPhoenixPrice + fragmentOfChimeraPrice + fragmentOfMinotaurPrice);
  } , [fragmentOfHydraPrice , fragmentOfChimeraPrice , fragmentOfMinotaurPrice , fragmentOfPhoenixPrice]);

  return (
    <>
      <div>Shaper</div>

      <p>Cost per run :</p>
      <img src={fragmentOfHydra} />
      <input
      type="number"
      value={fragmentOfHydraPrice}
      onChange={(e) => setFragmentOfHydraPrice(Number(e.target.value))}>
      </input>
      <br></br>
     
      <img src={fragmentOfPhoenix} />
      <input
      type="number"
      value={fragmentOfPhoenixPrice}
      onChange={(e) => setFragmentOfPhoenixPrice(Number(e.target.value))}>
      </input>
      <br></br>

      <img src={fragmentOfChimera} />
      <input
      type="number"
      value={fragmentOfChimeraPrice}
      onChange={(e) => setFragmentOfChimeraPrice(Number(e.target.value))}>
      </input>
      <br></br>

      <img src={fragmentOfMinotaur} />
      <input
      type="number"
      value={fragmentOfMinotaurPrice}
      onChange={(e) => setFragmentOfMinotaurPrice(Number(e.target.value))}>
      </input>
      <br></br>
<p>Total cost per run : </p>
      {costPerRun}
    
      
      
    

      <p>Time per run in sec</p>
      <input
        type="number"
        value={timePerRun}
        onChange={(e) => setTimePerRun(Number(e.target.value))}
      />

      <button onClick={handleCalculateProfit}>Calculate Profit</button>;

      <p>Profit per shaper</p>;
      <p>{profit !== null ? profit : 'Click the button to calculate profit'}</p>
    </>
  );
}
