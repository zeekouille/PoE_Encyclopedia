import React, { useState, useEffect } from "react";
import { useData } from './dataContext';
import Layout from "./Layout";
import "./crafting.css";
import Step1 from "../image/crafting/chaosDotBow/Step1.png";
import Step2 from "../image/crafting/chaosDotBow/Step2.png";
import Step3 from "../image/crafting/chaosDotBow/Step3.png";
import Step5 from "../image/crafting/chaosDotBow/Step5.png";
import Step6 from "../image/crafting/chaosDotBow/Step6.png";

const ChaosDotBow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [itemPrices, setItemPrices] = useState<{ [itemName: string]: number | null }>({
    "Hunter's Exalted Orb": null,
    "Divine Orb": null,
    "Orb of Alteration": null,
    "Regal Orb": null,
    "Orb of Scouring": null,
    "Orb of Annulment": null,
    // Ajoutez d'autres items ici au besoin
  });
  const { data } = useData(); // Utilisation du hook useData pour accéder aux données

  useEffect(() => {
    if (!data) return;

    // Liste des noms d'objets pour lesquels nous voulons récupérer les prix
    const itemNames = [
      "Hunter's Exalted Orb",
      "Divine Orb",
      "Orb of Alteration",
      "Regal Orb",
      "Orb of Scouring",
      "Orb of Annulment",
      // Ajoutez d'autres items ici au besoin
    ];

    // Fonction asynchrone pour obtenir les prix de tous les objets en une seule requête
    const getPricesForItems = async () => {
      // Créer une map pour stocker les prix
      const pricesMap: { [itemName: string]: number | null } = {};

      // Parcourir chaque nom d'objet et récupérer le prix
      await Promise.all(
        itemNames.map(async (itemName) => {
          const item = data.find((item: any) => item.name === itemName);
          pricesMap[itemName] = item ? item.mean : null;
        })
      );

      // Mettre à jour l'état avec tous les prix récupérés
      setItemPrices(pricesMap);
    };

    // Appeler la fonction pour obtenir les prix
    getPricesForItems();
  }, [data]);

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
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Price per</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6 link Maraketh Bow iLVL92</td>
                  <td>
                    <a
                      href="https://www.pathofexile.com/trade/search/Necropolis/EZDJdRzH5w"
                      rel="noreferrer"
                      target="_blank"
                      className="sub-link"
                    >
                      PoE trade link
                    </a>
                  </td>
                </tr>
                {itemPrices["Hunter's Exalted Orb"] !== null && (
                  <tr>
                    <td>1 Hunter's Exalted Orb</td>
                    <td>
                      <a
                        href="https://www.pathofexile.com/trade/exchange/Necropolis/j94oKzoIX"
                        rel="noreferrer"
                        target="_blank"
                        className="sub-link"
                      >
                        PoE trade link
                      </a>
                    </td>
                    <td>{itemPrices["Hunter's Exalted Orb"]}</td>
                  </tr>
                )}
                {itemPrices["Divine Orb"] !== null && (
                  <tr>
                    <td>5 Divine Orbs</td>
                    <td>
                      <a
                        href="https://www.pathofexile.com/trade/exchange/Necropolis/9z28fK"
                        rel="noreferrer"
                        target="_blank"
                        className="sub-link"
                      >
                        PoE trade link
                      </a>
                    </td>
                    <td>{itemPrices["Divine Orb"]}</td>
                  </tr>
                )}
                {itemPrices["Orb of Alteration"] !== null && (
                  <tr>
                    <td>Orb Of Alteration</td>
                    <td>
                      <a
                        href="https://www.pathofexile.com/trade/exchange/Necropolis/YOWQWXvfY"
                        rel="noreferrer"
                        target="_blank"
                        className="sub-link"
                      >
                        PoE trade link
                      </a>
                    </td>
                    <td>{itemPrices["Orb of Alteration"]}</td>
                  </tr>
                )}
                {itemPrices["Regal Orb"] !== null && (
                  <tr>
                    <td>Regal Orb</td>
                    <td>
                      <a
                        href="https://www.pathofexile.com/trade/exchange/Necropolis/ZBjaG3RHQ"
                        rel="noreferrer"
                        target="_blank"
                        className="sub-link"
                      >
                        PoE trade link
                      </a>
                    </td>
                    <td>{itemPrices["Regal Orb"]}</td>
                  </tr>
                  
                )} 
                 {itemPrices["Orb Of Scouring"] !== null && (
                  <tr>
                    <td>Orb Of Scouring</td>
                    <td>
                      <a
                        href="https://www.pathofexile.com/trade/exchange/Necropolis/ZBjaG3RHQ"
                        rel="noreferrer"
                        target="_blank"
                        className="sub-link"
                      >
                        PoE trade link
                      </a>
                    </td>
                    <td>{itemPrices["Orb of Scouring"]}</td>
                  </tr>
                  
                )}
                         {itemPrices["Orb of Annulment"] !== null && (
                  <tr>
                    <td>Orb of Annulment</td>
                    <td>
                      <a
                        href="https://www.pathofexile.com/trade/exchange/Necropolis/jedLr7dTX"
                        rel="noreferrer"
                        target="_blank"
                        className="sub-link"
                      >
                        PoE trade link
                      </a>
                    </td>
                    <td>{itemPrices["Orb of Annulment"]}</td>
                  </tr>
                  
                )}
              </tbody>
            </table>

            <div className="button-container">
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2>Étape 2</h2>
            <p>
              Spam alterations + augment for T1 Damage Over Time Multiplier :
              Avg 257 alt / 55 augments
            </p>
            <img src={Step1} alt="Crafting image" />

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
            <img src={Step2} alt="Crafting image" />
            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2>Étape 4</h2>
            <p>Annul until T1 DoT is isolated </p>
            <p>if you brick t1 dot, back to alt spam</p>
            <img src={Step3} alt="Crafting image" />

            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <h2>Étape 5</h2>
            <p>Multimod + cannot roll attack mods</p>
            <p>Exalt slam for +1 socketed gems</p>
            <p>Hunter slam for chaos dot guarenteed</p>

            <img src={Step5} alt="Crafting image" />

            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
              <button onClick={nextStep}>Suivant</button>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div>
            <h2>Étape 6</h2>
            <p>remove multimod</p>
            <p>Craft +2 to Level of Socketed Support Gems</p>
            <p>Craft Chaos damage over time multiplier</p>
            <img src={Step6} alt="Crafting image" />

            <div className="button-container">
              <button onClick={previousStep}>Précédent</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ChaosDotBow;
