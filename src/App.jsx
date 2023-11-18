import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&colorred&json=true`;

export const App = () => {
  const [fact, setFact] = useState();
  const [firstWord, setFirstWord] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    // Note: Obtener el random fact
    // * Con async y await
    const getRandomFact = async () => {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
      const data = await res.json();

      setFact(data.fact);
    };

    getRandomFact();

    // fetch(CAT_ENDPOINT_RANDOM_FACT)
    //   .then((res) => res.json())
    //   .then((data) => setFact(data.fact));

    // fetch(
    //   `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    // )
    //   .then((res) => res.json())
    //   .then((response) => {
    //     const { url } = response;
    //     console.log(url);
    //     setImageUrl(`https://cataas.com/${url}`);
    //   });
  }, []);

  // Note: Obtener la primera palabra del hecho
  const getFirstWord = () => {
    const firstWord = fact.split(' ')[0];
    setFirstWord(firstWord);

    getImageByFirstWord(firstWord);
  };

  // Note: Obtener la imagen
  function getImageByFirstWord(firstWord) {
    const image = `https://cataas.com/cat/says/${firstWord}`;
    setImageUrl(image);
  }

  return (
    <>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {firstWord && <img src={imageUrl} alt="Imagen de gato" width="500px" />}
      <button onClick={getFirstWord}> Obtener la primera palabra </button>
    </>
  );
};
