const meals = [
  { id: 1, name: "닭가슴살 샐러드", calories: 320, date: "2026-01-18" },
  { id: 2, name: "현미밥 도시락", calories: 540, date: "2026-01-20" },
  { id: 3, name: "아메리카노", calories: 10, date: "2026-01-21" },
  { id: 4, name: "연어 포케", calories: 480, date: "2026-01-22" },
  { id: 5, name: "두부김치", calories: 410, date: "2026-01-23" },
];

const options = {
  query: "포",
  onlyFavorites: true,
  favoriteIds: [4, 5],
  sortBy: "calories", // "calories"
};

function getMealList(meals, options) {
  let filtered = [];

  if (options.query) {
    filtered = meals.filter((item) => item.name.includes(options.query));
  }

  for (let i = 0; i < options.favoriteIds.length; i++) {
    for (let j = 0; j < meals.length; j++) {
      if (meals[j].id === options.favoriteIds[i]) filtered.push(meals[j]);
    }
  }

  switch (options.sortBy) {
    case "latest":
      filtered.sort((a, b) => a - b);
      break;
    case "calories":
      filtered.sort((a, b) => b - a);
      break;
    default:
  }

  return [...new Set(filtered)];
}

console.log(getMealList(meals, options));
