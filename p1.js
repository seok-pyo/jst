function getMealList(meals, options) {
  const {
    query = "",
    onlyFavorites = false,
    favoriteIds = [],
    sortBy = "latest",
  } = options;

  const q = query.trim().toLowerCase();
  const favoriteSet = new Set(favoriteIds);

  let result = meals.filter((m) => {
    // query 필터
    const matchQuery = q ? m.name.toLowerCase().includes(q) : true;

    // 즐겨찾기 필터
    const matchFavorite = onlyFavorites ? favoriteSet.has(m.id) : true;

    return matchQuery && matchFavorite;
  });

  // 정렬
  if (sortBy === "latest") {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === "calories") {
    result.sort((a, b) => b.calories - a.calories);
  }

  return result;
}
