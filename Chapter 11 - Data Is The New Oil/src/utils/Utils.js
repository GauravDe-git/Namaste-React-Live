export function filterSearchData(searchTxt, restaurants) {
  const searchFilterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
  return searchFilterData;
}
