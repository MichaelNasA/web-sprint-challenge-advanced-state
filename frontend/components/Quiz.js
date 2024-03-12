import React,{useEffect}from 'react'
import {connect} from 'react-redux'
import {fetchQuiz,postQuiz,postAnswer,setQuiz} from '../state/action-creators'

function Quiz(props){
  //console.log(props);

useEffect (() => {
  props.fetchQuiz()
},[]) // use effect runs all the time. I only want to run 1 time, or the app will run till it crash. WE DON'T NEED THAT !!!!
 
  // make quiz not null
  // figure out to over write null in your reducer
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button onClick = {props.selectAnswer} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}



const mapStateToProps = (state) => {
  //console.log(state)
  return {
    quiz : state.quiz,
    selectedAnswer : state.selectedAnswer,
    fetchQuiz : state.fetchQuiz,
    postAnswer : state.postAnswer,
    postQuiz : state.postQuiz
  }
}

export default connect(mapStateToProps, { fetchQuiz, postQuiz, postAnswer, setQuiz })(Quiz);


