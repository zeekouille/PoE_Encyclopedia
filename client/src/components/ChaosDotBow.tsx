import React, { useState } from 'react';
import Layout from './Layout';

const ChaosDotBow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const previousStep = () => setCurrentStep(currentStep - 1);

  return (
    <Layout>
      <div>
        <h1>Chaos Dot Bow</h1>
        {currentStep === 1 && (
          <div>
            <h2>Étape 1</h2>
            <p>What will you need ?</p>
            <a href="https://www.pathofexile.com/trade/search/Necropolis/EZDJdRzH5w" rel="noreferrer" target="_blank" className="sub-link">6l Maraketh Bow iLVL82</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/9z28fK" rel="noreferrer" target="_blank" className="sub-link">5 Divine orbs</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/j94oKzoIX" rel="noreferrer" target="_blank" className="sub-link">1 Hunter's exalted orb</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/rbdMHQ" rel="noreferrer" target="_blank" className="sub-link">1 Orb of Scouring</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/20vqoMock" rel="noreferrer" target="_blank" className="sub-link">5000 Vivid Force</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/YOWQWXvfY" rel="noreferrer" target="_blank" className="sub-link">Orb of Alterations</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/ZBjaG3RHQ" rel="noreferrer" target="_blank" className="sub-link">Regal Orb</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/vkoaMJLfE" rel="noreferrer" target="_blank" className="sub-link">Scouring Orb</a>
            <a href="https://www.pathofexile.com/trade/exchange/Necropolis/jedLr7dTX" rel="noreferrer" target="_blank" className="sub-link">Orb Of Annulment</a>

            <div className="button-container">
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Étape 2</h2>
            <p>Spam alterations + augment for T1 Damage Over Time Multiplier : Avg 257 alt / 55 augments</p>
           
            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div>
            <h2>Étape 3</h2>
            <p>Regal</p>
            <p>Annul until T1 DoT is isolated </p>
            <p>if you brick t1 dot, back to alt spam</p>
            <p>Multimod + cannot roll attack mods</p>
            <p>Exalt slam for +1 socketed gems</p>
            <p>Hunter slam for chaos dot guarenteed</p>
            <p>remove multimod</p>
            <p>Craft +2 to Level of Socketed Support Gems</p>
            <p>Craft Chaos damage over time multiplier</p>
            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2>Étape 4</h2>
            <p>Vérifiez la tension de l'arc et ajustez si nécessaire.</p>
            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ChaosDotBow;
