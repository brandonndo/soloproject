// /**
//  * ************************************
//  *
//  * @module  marketsReducer
//  * @author
//  * @date
//  * @description reducer for market data
//  *
//  * ************************************
//  */

// import * as types from 'client/actions/actions.js';

// const initialState = {
//   totalMarkets: 0,
//   totalCards: 0,
//   marketList: [],
//   lastMarketId: 10000,
//   newLocation: '',
// };

// const marketsReducer = (state = initialState, action) => {
//   let marketList;
//   let totalMarkets;
//   let totalCards;

//   switch (action.type) {
//     case types.ADD_MARKET: {
//       // increment lastMarketId and totalMarkets counters

//       const newMarket = {
//         newLocation : action.payload,
//         lastMarketId : state.lastMarketId + 1,
//         cards: 0
//       };

//       // push the new market onto a copy of the market list
//       marketList = state.marketList.slice();
//       marketList.push(newMarket);

//       // return updated state
//       return {
//         ...state,
//         marketList,
//         lastMarketId : newMarket.lastMarketId,
//         totalMarkets : state.totalMarkets + 1,
//         newLocation : newMarket.newLocation
//       };
//     }
//     case types.SET_NEW_LOCATION: { //if have market, add new market
//       return;
//     }

//     case types.ADD_CARD: {
//       const totalCards = state.totalCards + 1;

//       marketList = state.marketList.slice();
//       marketList.forEach(el => {
//         if (el.lastMarketId === action.payload){
//           el.cards++;
//         } 
//       });

//       return {
//         ...state,
//         marketList,
//         totalCards: state.totalCards + 1
//       };
      
//     }

//     case types.DELETE_CARD: {

//       marketList = state.marketList.slice();
//       totalCards = state.totalCards;
//       totalMarkets = state.totalMarkets;

//       marketList = marketList.filter(el => {
//         if (el.lastMarketId === action.payload) {
//           if (el.cards > 0) {
//             el.cards--;
//             totalCards--;
//             return true;
//           }
//           totalMarkets--;
//           return false;
//         }
//         return true;
//       });

//       return {
//         ...state,
//         marketList,
//         totalCards: totalCards,
//         totalMarkets: totalMarkets,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

// export default marketsReducer;