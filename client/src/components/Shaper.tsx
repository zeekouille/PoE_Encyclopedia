import React, { useState } from 'react';

export default function Shaper() {
  const [costPerRun, setCostPerRun] = useState<number>(0);
  const [timePerRun, setTimePerRun] = useState<number>(0);
  const [fragmentOfKnowledge, setFragmentOfKnowledge] = useState<number>(303);
  const [fragmentOfShape, setFragmentOfShape] = useState<number>(350);
  const [starforge, setStarforge] = useState<number>(350);
  const [profit, setProfit] = useState<number | null>(null);

  const profitPerShaper = () =>
    (fragmentOfKnowledge + fragmentOfShape) / 4 + starforge * 0.035;

  const handleCalculateProfit = () => {
    const calculatedProfit = profitPerShaper();
    setProfit(calculatedProfit);
  };

  return (
    <>
      <div>Shaper</div>

      <p>Cost per run</p>
      <input
        type="number"
        value={costPerRun}
        onChange={(e) => setCostPerRun(Number(e.target.value))}
      />

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
}
