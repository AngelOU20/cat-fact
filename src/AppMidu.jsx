import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';

export const AppMidu = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  // Note: Devolver otro random fact
  const handleRefreshFact = () => {
    refreshFact();
  };

  return (
    <>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first word from ${fact}`}
          width="500px"
        />
      )}
      <button onClick={handleRefreshFact}>Get new fact</button>
    </>
  );
};
