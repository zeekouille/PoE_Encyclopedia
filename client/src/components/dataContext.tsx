import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import Popup from './Popup'; // Import du composant Popup

interface DataContextType {
  data: any;
  names: string[];  // Ajout de la variable names
  means: number[];  // Ajout de la variable means
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [names, setNames] = useState<string[]>([]);
  const [means, setMeans] = useState<number[]>([]);
  const [fetchStatus, setFetchStatus] = useState<{ success: boolean; message: string } | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.poe.watch/get?category=currency&league=Necropolis');
      const fetchedData = response.data;

      // Extraction des noms et des moyennes
      const fetchedNames = fetchedData.map((item: any) => item.name);
      const fetchedMeans = fetchedData.map((item: any) => item.mean);

      setData(fetchedData);
      setNames(fetchedNames);
      setMeans(fetchedMeans);
      setFetchStatus({ success: true, message: 'Données récupérées avec succès!' });

      console.log('Data fetched successfully:', fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setFetchStatus({ success: false, message: 'Échec de la récupération des données.' });
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // 60000 ms = 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <DataContext.Provider value={{ data, names, means }}>
      {children}
      {fetchStatus && (
        <Popup
          message={fetchStatus.message}
          success={fetchStatus.success}
        />
      )}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
