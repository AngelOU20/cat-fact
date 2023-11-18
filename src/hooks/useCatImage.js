import { useEffect, useState } from 'react';

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();

  // Note: Obtener la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;

    // ? Recuperar la 3 primeras palabras
    // const firstWord = fact.split(' ').slice(0, 3).join(' ');
    // const firstWord = fact.split(' ', 3).join(' ');

    // Note: Obtener la primera palabra
    const firstWord = fact.split(' ')[0];

    // Note: Obtener la imagen por la primera palabra
    const imageByFirstWord = `https://cataas.com/cat/says/${firstWord}`;
    setImageUrl(imageByFirstWord);
  }, [fact]);

  return {
    imageUrl,
  };
};
