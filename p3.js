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
  {
    id: 7,
    name: "단백질 쉐이크",
    category: "drink",
    calories: 220,
    date: "2026-01-23",
  },
  {
    id: 8,
    name: "두부김치",
    category: "meal",
    calories: 410,
    date: "2026-01-19",
  },
];

const options = {
  query: "", // name 부분일치, 대소문자 무시
  category: "all", // "all"이면 필터 없음
  onlyFavorites: false, // true면 favoriteIds만 남기기
  favoriteIds: [2, 5, 6], // 즐겨찾기 id 목록
  sortBy: "latest", // "latest" | "name" | "calories"
  page: 1, // 1부터 시작
  pageSize: 3, // 한 페이지 개수
};

function getPageFoodList(foods, options) {
  const {
    query,
    category,
    onlyFavorites,
    favoriteIds,
    sortBy,
    page,
    pageSize,
  } = options;

  const q = query ? query.trim().toLowerCase() : "";
  const f = new Set(favoriteIds);

  const result = foods.filter((item) => {
    const matchName = q ? item.name.toLowerCase().includes(q) : true;
    const matchCate = category !== "all" ? item.category === category : true; // 이 부분 check
    const isFavorite = onlyFavorites ? f.has(item.id) : true;

    return matchName && matchCate && isFavorite;
  });

  if (sortBy === "latest") {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sortBy === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "calories") {
    result.sort((a, b) => {
      const cal = b.calories - a.calories;
      if (cal !== 0) return cal;
      const diff = new Date(b.date) - new Date(a.date);
      if (diff !== 0) return diff;

      return a.name.localeCompare(b.name);
    });
  }

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const fitems = result.slice(start, end);

  return {
    // total: result.length, / `${result.length}` 이렇게 문자열로 만들지 않아도 된다.
    total: result.length,
    page: page,
    pageSize: pageSize,
    totalPages: Math.ceil(result.length / pageSize),
    items: fitems,
  };
}

console.log(getPageFoodList(foods, options));
