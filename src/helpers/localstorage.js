const saveFavorites = (name, array) => {
  localStorage.setItem(name, JSON.stringify(array));
};

const loadFavorites = (name) => {
  const favorites = localStorage.getItem(name);
  return JSON.parse(favorites);
};

export { saveFavorites, loadFavorites };
