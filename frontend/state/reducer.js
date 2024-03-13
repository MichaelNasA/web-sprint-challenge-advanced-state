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
  switch(action.type){
    case 'SET_SELECTED_ANSWER':
      return action.payload;
      default:
    return state;
  }
  
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE:
      return action.payload
    case types.SET_SELECTED_ANSWER:
      return ''
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case types.RESET_FORM:
      return initialFormState
    case types.INPUT_CHANGE:
      return { ...state, [action.payload.inputId]: action.payload.value }
    default:
      return state
  }
}
export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
