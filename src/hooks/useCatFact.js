import { useEffect, useState } from 'react';
import { getRandomFact } from '../service/fact';

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
    // getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(() => {
    refreshFact();
  }, []);

  return {
    fact,
    refreshFact,
  };
};
