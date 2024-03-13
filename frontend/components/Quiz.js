import React,{useEffect}from 'react'
import {connect} from 'react-redux'
import {fetchQuiz,postQuiz,postAnswer,setQuiz, selectAnswer} from '../state/action-creators'

function Quiz(props){
  const {
    fetchQuiz,
    selectAnswer,
    selectedAnswer,
    postAnswer,
    quiz,
  } = props
  //console.log(props);

useEffect (() => {
  !quiz && fetchQuiz()
},[]) // use effect runs all the time. I only want to run 1 time, or the app will run till it crash. WE DON'T NEED THAT !!!!
 
  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${selectedAnswer === quiz.answers[0].answer_id ? ' selected' : ''}`} onClick={() => selectAnswer(quiz.answers[0].answer_id)}>
                {quiz.answers[0].text}
                <button>
                  {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
                <div className={`answer${selectedAnswer === quiz.answers[1].answer_id ? ' selected' : ''}`} onClick={() => selectAnswer(quiz.answers[1].answer_id)}>
                {quiz.answers[1].text}
                <button>
                  {selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!selectedAnswer} onClick={() => postAnswer({ quiz_id: quiz.quiz_id, answer_id: selectedAnswer })}>Submit answer</button>
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

export default connect(mapStateToProps, { fetchQuiz, postQuiz, postAnswer, setQuiz, selectAnswer })(Quiz);


