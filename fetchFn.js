function createCachedFetcher(fetchFn) {
  let queryKey = null;
  let data = null;

  return async function (query) {
    if (query !== queryKey) {
      data = await fetch(fetchFn);
      return data;
    } else {
      return data;
    }
  };
}
