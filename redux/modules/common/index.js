// Initial
const initialState = {
  item: 0,
};

// actionTypes
const actionTypes = {
  SELECT_ITEM: "SELECT_ITEM",
};

// Reducer
export const common = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SELECT_ITEM: {
      const { id } = payload;
      return { ...state, selectedItem: id };
    }

    default: {
      return state;
    }
  }
};

// Actions
export const selectItem = (id) => ({
  type: actionTypes.SELECT_ITEM,
  payload: id,
});
