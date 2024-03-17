// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";
import * as types from './action-types'

export function moveClockwise() {
  return {type: types.MOVE_CLOCKWISE}
 }

export function moveCounterClockwise() {
  return {type: types.MOVE_COUNTERCLOCKWISE}
 }

export function selectAnswer(answer) {
  return {type: types.SET_SELECTED_ANSWER, payload:answer}
 }

export function setMessage(message) {
  return {type: types.SET_INFO_MESSAGE, payload:message}
 }

export function setQuiz(quiz) {
  return {type: types.SET_QUIZ_INTO_STATE, payload:quiz}
 }

 export function inputChange({ inputId, value }) {
  return { type: types.INPUT_CHANGE, payload: { inputId, value } }
}

export function resetForm() {
  return {type: types.RESET_FORM}
 }

// ❗ Async action creators
export const fetchQuiz = () => (dispatch) =>  {
  
    //console.log("inside dispatch")
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setQuiz(null));

    // Perform the GET request
    axios.get(`http://localhost:9000/api/quiz/next`)
      .then(response => {
        //console.log(response)
        // On successful GET, dispatch an action to send the obtained quiz to its state
        dispatch(setQuiz(response.data));
      })
      .catch(error => {
        // On error, log the error or handle it appropriately
        console.error('Error fetching quiz:', error);
      });
} 
  

export function postAnswer({quiz_id, answer_id}) {
  return function(dispatch) {
    // Perform the POST request
    axios.post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
      .then(response => {
        // On successful POST, dispatch actions as necessary
        dispatch({ type: types.SET_SELECTED_ANSWER, payload: null }); // Reset selected answer
        dispatch({ type: types.SET_INFO_MESSAGE, payload: response.data.message }); // Set server message
        dispatch(fetchQuiz()); // Fetch the next quiz
      })
      .catch(error => {
        // On error, log the error or handle it appropriately
        console.error('Error posting answer:', error);
      });
  };
}

export function postQuiz({
  newQuestion,
  newTrueAnswer,
  newFalseAnswer,
}) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', {
      question_text: newQuestion,
      true_answer_text: newTrueAnswer,
      false_answer_text: newFalseAnswer,
    })
      .then(res => {
        dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
        dispatch(resetForm())
      })
      .catch(err => {
        const errToDisplay = err.response ? err.response.data.message : err.message
        dispatch(setMessage(errToDisplay))
      })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
