const foods = [
  {
    id: 1,
    name: "아메리카노",
    category: "drink",
    calories: 10,
    date: "2026-01-21",
  },
  {
    id: 2,
    name: "카페라떼",
    category: "drink",
    calories: 180,
    date: "2026-01-20",
  },
  {
    id: 3,
    name: "연어 포케",
    category: "meal",
    calories: 480,
    date: "2026-01-22",
  },
  {
    id: 4,
    name: "그릭요거트",
    category: "snack",
    calories: 190,
    date: "2026-01-22",
  },
  {
    id: 5,
    name: "현미밥 도시락",
    category: "meal",
    calories: 540,
    date: "2026-01-20",
  },
  {
    id: 6,
    name: "닭가슴살 샐러드",
    category: "meal",
    calories: 540,
    date: "2026-01-23",
  },
];

const options = {
  query: "락", // name 부분일치, 대소문자 무시
  category: "meal", // "all"이면 카테고리 필터 없음
  onlyFavorites: true, // true면 favoriteIds만 남기기
  favoriteIds: [2, 5, 6], // 즐겨찾기 id 목록
  sortBy: "calories", // "calories" | "name" | "latest"
};

function getFoodList(foods, options) {
  const { query, category, onlyFavorites, favoriteIds, sortBy } = options;

  const q = query.trim().toLowerCase();
  const favoriteSet = new Set(favoriteIds);

  let result = foods.filter((item) => {
    const matchQuery = q ? item.name.toLowerCase().includes(q) : true;
    const matchFavorite = onlyFavorites ? favoriteSet.has(item.id) : true;
    const matchCate = category !== "all" ? item.category === category : true;

    return matchQuery && matchFavorite && matchCate;
  });

  if (sortBy === "latest") {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === "name") {
    result.sort((a, b) => a.name - b.name);
    // result.sort((a,b) => a.localeCompare(b));
  } else {
    result.sort((a, b) => {
      if (b.calories !== a.calories) return b.calories - a.calories;
      const timeDiff = new Date(b.date) - new Date(a.date);
      if (timeDiff !== 0) return timeDiff;

      return a.name.localeCompare(b.name);
    });
  }

  return result;
}

console.log(getFoodList(foods, options));
