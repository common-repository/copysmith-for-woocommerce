const getJwtValue = () => {
  const tokenElement = document.getElementById('cs-ai-token');

  if(tokenElement && tokenElement.value) {
    return tokenElement.value;
  }

  return '';
}

export {
  getJwtValue
};