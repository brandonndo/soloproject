

// export const ADD_HABIT = 'ADD_HABIT';
// export const SET_NEW_LOCATION = 'SET_NEW_LOCATION';
// export const DELETE_HABIT = 'DELETE_HABIT';



// // delete habit
// export const deleteHabitActionCreator = habit => ({
//   type: DELETE_HABIT,
//   payload: habit
// });


// // type new habit
// export const setNewLocationActionCreator = newLocations => ({
//   type: SET_NEW_LOCATION,
//   payload: newLocations
// });

// // submit button to add habit
// export const addActionCreator = newLocation => ({
//   type: ADD_MARKET,
//   payload: newLocation
// });

/**
 * ************************************
 *
 * @module  actionTypes.js
 * @description Action Type Constants
 *
 * ************************************
 */

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const ADD_MARKET = 'ADD_MARKET';
export const SET_NEW_LOCATION = 'SET_NEW_LOCATION';

/**
 * ************************************
 *
 * @module  actions.js
 * @description Action Creators
 *
 * ************************************
 */

export const addCardActionCreator = marketId => ({
  type: ADD_CARD,
  payload: marketId
});

export const deleteCardActionCreator = marketId => ({
  type: DELETE_CARD,
  payload: marketId
});

export const addMarketActionCreator = newLocation => ({
  type: ADD_MARKET,
  payload: newLocation
});

export const setNewLocationActionCreator = newLocations => ({
  type: SET_NEW_LOCATION,
  payload: newLocations
});
