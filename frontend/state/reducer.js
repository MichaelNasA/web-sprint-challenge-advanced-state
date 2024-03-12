// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types.js'


const initialWheelState = {
  position: 0 // Initial position of the wheel
};

function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case 'MOVE_CLOCKWISE':
      return {
        ...state,
        position: (state.position + 1) % 6 // Assuming there are 6 cogs
      };
    case 'MOVE_COUNTERCLOCKWISE':
      return {
        ...state,
        position: (state.position + 5) % 6 // Assuming there are 6 cogs
      };
    default:
      return state;
  }
}


const initialQuizState = null;

function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE:
      return action.payload; // return fetched quiz data
    case 'POST_ANSWER':
      return state; // return the existing state
    case 'POST_QUIZ':
      return state; // return the existing state
    default:
      return state; 
  }
}


const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
