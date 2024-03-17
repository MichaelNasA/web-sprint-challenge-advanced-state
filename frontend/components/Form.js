import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log(props)

  const {postQuiz, inputChange, form} = props 
  
  const onChange = evt => {
    const { id, value } = evt.target;
    inputChange({...form, [id]:value})
  }

  const onSubmit = evt => {
    evt.preventDefault(); // Prevent the default form submission behavior
  
    // Dispatch an action to add a new quiz
    postQuiz(form)
  
  }
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
