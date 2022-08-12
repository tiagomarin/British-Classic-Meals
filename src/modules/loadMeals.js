const loadMeals = async () => {
  const response = await fetch(
    'https://themealdb.com/api/json/v1/1/filter.php?a=British',
  );
  const mealList = await response.json();
  const mealArray = mealList.meals;
  return mealArray;
};
export default loadMeals;
