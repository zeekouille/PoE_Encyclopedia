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
            <p>Get Maraketh Bow</p>
            <div className="button-container">
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Étape 2</h2>
            <p>Disposez les bâtons en forme de triangle ouvert et les ficelles en zigzag.</p>
            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Étape 3</h2>
            <p>Attachez les ficelles aux extrémités des bâtons pour former l'arc.</p>
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
