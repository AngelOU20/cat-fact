const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

// Note: Obtener el random fact
export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);

    if (!res.ok) throw new Error('Error al llamar a la API');

    const { fact } = await res.json();
    return fact;
  } catch (error) {
    console.log(error);
    return error;
  }
};
