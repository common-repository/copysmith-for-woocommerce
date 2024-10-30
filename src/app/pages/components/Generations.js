const generations = (data) => {
  if(!data) {
    return '0';
  }

  if(data && data.results.length < 1) {
    return '0';
  }

  return data.results[0].generationSize;
};

export default generations;
