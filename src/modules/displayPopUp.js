import getDetails from './getDetails';
import renderPopUp from './renderPopUp';

const displayPopUp = async (mealID) => {
  const data = await getDetails(mealID);
  console.log('comments API result: ', data);
  renderPopUp(mealID, data);
};

export default displayPopUp;