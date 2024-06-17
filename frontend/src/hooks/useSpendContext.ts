import { useContext } from 'react';
import { SpendContext } from '../context/SpendProvider';

export const useSpendContext = () => {
  const context = useContext(SpendContext);
  if (context === undefined) {
    throw new Error('useSpendContext must be used within a SpendProvider');
  }
  return context;
};
