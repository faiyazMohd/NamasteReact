export const filterData = (searchText, restaurants) => {
    const filterData = restaurants?.filter((restaurant) => {
      if (searchText === "") {
        return restaurants;
      } else {
        // return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
        return restaurant?.info?.name
          ?.toLowerCase()
          .includes(searchText?.toLowerCase());
      }
    });
    return filterData;
  };