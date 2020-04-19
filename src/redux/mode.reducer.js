// import { DAY, NIGHT } from './mode.actions';

const initialState = {
  day: true
}

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case true:
      return {day: true};
    case false:
      return {day: false};
    default:
      return state;
  }
};

// const initialState = {
//   mode: DAY
// }

// const modeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DAY:
//       return state = {mode: DAY};
//     case NIGHT:
//       return state = {mode: NIGHT};
//     default: 
//       return state;
//   }
// };

export default modeReducer;