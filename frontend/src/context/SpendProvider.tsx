import { createContext, useCallback, useState } from 'react';
import { DataItem } from '../components/types';
import { fetchSpends } from '../services/spendApiService';

// set interface for spend context
interface SpendContextType {
  spendItems: DataItem[];
  setSpendItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  getSpends: () => Promise<void>;
}

// createContext with SpendContextType and pass props in with default values
export const SpendContext = createContext<SpendContextType>({
  spendItems: [],
  setSpendItems: () => {},
  getSpends: async () => {},
});

// create the SpendProvider which takes prop of children and gets the spend items
export const SpendProvider = ({ children }: { children: React.ReactNode }) => {
  const [spendItems, setSpendItems] = useState<DataItem[]>([]);

  const getSpends = useCallback(async () => {
    try {
      const spend_data = await fetchSpends();
      setSpendItems(spend_data);
    } catch (error) {
      console.error('Error fetching spends:', error);
    }
  }, []);

  return (
    <SpendContext.Provider value={{ spendItems, setSpendItems, getSpends }}>
      {children}
    </SpendContext.Provider>
  );
};
