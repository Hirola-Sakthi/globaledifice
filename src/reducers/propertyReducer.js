// Action types
const SET_PROPERTY_DATA = "SET_PROPERTY_DATA";

// Action creators
export const setPropertyData = (data) => ({
  type: SET_PROPERTY_DATA,
  payload: data,
});

export const SlugPropertyDetails = (data) => (dispatch) => {
  dispatch(setPropertyData(data));
};

// Reducer
const initialState = {
  propertyData: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROPERTY_DATA:
      return {
        ...state,
        propertyData: action.payload,
      };
    default:
      return state;
  }
};

export default propertyReducer;
