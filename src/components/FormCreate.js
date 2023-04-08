import styled from "styled-components"
import { useState, useRef, useEffect } from "react"
import { ButtonStyled } from "./LayoutComponents"

const FormCreate = () => {
    const [questions, setQuestions] = useState([])

    const addQuestion = (evt) => {
        evt.preventDefault()

        setQuestions([
            ...questions,
            FormQuestion
        ])
    }

    return (
        <form>
            <TitleSection>
                <input type='text' placeholder='Titulo del questionario' />
            </TitleSection>

            {
                questions.map((Question, index) => (
                    <Question key={index} index={index} />
                ))
            }

            <ButtonStyled onClick={addQuestion}>
                Añadir pregunta
            </ButtonStyled>
        </form>
    )
}

const FormQuestion = ({ indexQuestion }) => {
    const [typeQuestion, setTypeQuestion] = useState('free')
    const [showMenuQuestion, setShowMenuQuestion] = useState(false)
    const [answerQuestionsSingle, setAnswerQuestionSingle] = useState([])
    const [answerQuestionsMultiple, setAnswerQuestionMultiple] = useState([])

    const singleAnswerinput = useRef()

    const toggleShowMenuQuestion = (evt) => {
        evt.preventDefault()
        setShowMenuQuestion(!showMenuQuestion)
    }

    const addSingleAnswer = () => {
        setAnswerQuestionSingle([
            ...answerQuestionsSingle,
            singleChoiseAnswer
        ])
    }

    const removeSingleAnswer = (indexToRemove) => {
        if (answerQuestionsSingle.length !== 1) {
            const newState = []
            answerQuestionsSingle.forEach((answer, index) => {
                if (index !== indexToRemove) {
                    newState.push(answer)
                }
            })  

            setAnswerQuestionSingle(newState)
        }
    }

    const addMultipleAnswer = () => {
        setAnswerQuestionMultiple([
            ...answerQuestionsMultiple,
            multipleChoiceAnswer
        ])
    }

    const removeMultipleAnswer = (indexToRemove) => {
        if (answerQuestionsMultiple.length !== 1) {
            const newState = answerQuestionsMultiple.map((question, index) => {
                if (index !== indexToRemove) {  
                    return question
                }
            })
            setAnswerQuestionMultiple(newState)
        }
    }

    const changeTypeQuestion = (newTypeQuestion) => {
        if (typeQuestion !== newTypeQuestion) {
            setTypeQuestion(newTypeQuestion)

            if (newTypeQuestion === 'free') {
                setAnswerQuestionSingle([])
                setAnswerQuestionMultiple([])
            }

            if (newTypeQuestion === 'singleShoise') {
                setAnswerQuestionSingle([singleChoiseAnswer])
                setAnswerQuestionMultiple([])
            }

            if (newTypeQuestion === 'multipleChoise') {
                setAnswerQuestionSingle([])
                setAnswerQuestionMultiple([multipleChoiceAnswer])
            }
        }
    }

    useEffect(() => {
        console.log(answerQuestionsSingle);
    }, [answerQuestionsSingle])

    return (
        <QuestionStyled>
            <QuestionMenuIcon onClick={toggleShowMenuQuestion}>
                - - -
            </QuestionMenuIcon>

            <QuestionMenuContent showMenu={showMenuQuestion} onMouseLeave={toggleShowMenuQuestion}>
                <button onClick={
                    (evt) => {
                        evt.preventDefault()
                        changeTypeQuestion('free')  
                    }
                }>
                    Libre
                </button>

                <button onClick={
                    (evt) => {
                        evt.preventDefault()
                        changeTypeQuestion('singleShoise')
                    }
                }>
                    Respuesta unica
                </button>

                <button onClick={
                    (evt) => {
                        evt.preventDefault()
                        changeTypeQuestion('multipleChoise')
                    }
                }>
                    Respuesta Multiple
                </button>
            </QuestionMenuContent>

            <QuestionTitle>
                <input type='text' placeholder='Descripción de la pregunta' />
            </QuestionTitle>

            <QuestionContent>
                {
                    typeQuestion === 'free' &&
                    <textarea placeholder='Respuesta' ref={singleAnswerinput}></textarea>
                }

                {
                    typeQuestion === 'singleShoise' &&
                    <div>
                        {
                            answerQuestionsSingle.map((OptionAnswer, index) => (
                                <div key={index}>
                                    {
                                        <OptionAnswer
                                            index={indexQuestion}
                                            addSingleAnswer={addSingleAnswer}
                                            removeSingleAnswer={removeSingleAnswer}
                                            indexState={index}
                                        />
                                    }
                                </div>
                            ))
                        }
                    </div>
                }

                {
                    typeQuestion === 'multipleChoise' &&
                    <div>
                        {
                            answerQuestionsMultiple.map((OptionAnswer, index) => (
                                <div key={index}>
                                    {
                                        <OptionAnswer
                                            index={indexQuestion}
                                            addMultipleAnswer={addMultipleAnswer}
                                            removeMultipleAnswer={removeMultipleAnswer}
                                            indexState={index}
                                        />
                                    }
                                </div>
                            ))
                        }
                    </div>
                }
            </QuestionContent>
        </QuestionStyled>
    )
}

//* answer components
const singleChoiseAnswer = ({addSingleAnswer, removeSingleAnswer, index, indexState}) => {

    return(
        <div className='op'>
            <input type='radio' name={'singleGroupQuestion' + index} />
            <input type='text' placeholder='Texto de respuesta' />
            <div className='optionAnswer'>
                <button
                    onClick={(evt) => {
                        evt.preventDefault()
                        addSingleAnswer()
                    }}
                    title='Añadir respuesta'
                >+</button>

                <button
                    onClick={(evt) => {
                        evt.preventDefault()
                        removeSingleAnswer(indexState)
                    }}
                    title='Eliminar respuesta'
                >-</button>
            </div>
        </div>
    )
}

const multipleChoiceAnswer = ({addMultipleAnswer, removeMultipleAnswer, index, indexState}) => {
    return (
        <div className='op'>
            <input type='checkbox' name={'singleGroupQuestion' + index} />
            <input type='text' placeholder='Texto de respuesta' />
            <div className='optionAnswer'>
                <button
                    onClick={(evt) => {
                        evt.preventDefault()
                        addMultipleAnswer()
                    }}
                    title='Añadir respuesta'
                >+</button>

                <button
                    onClick={(evt) => {
                        evt.preventDefault()
                        removeMultipleAnswer(indexState)
                    }}
                    title='Eliminar respuesta'
                >-</button>
            </div>
        </div>
    )
}

//* styled components

const QuestionStyled = styled.div`
    margin: 30px;
    padding: 20px;
    width: 70%;
    border: 1px solid rgb(181, 224, 255);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
`

const TitleSection = styled.div`
    width: 80%;
    margin: 10px 30px 50px 30px;
    border-bottom: 1px solid #fff;

    input{
        font-size: 2rem;
        border: none;
        width: 100%;    
        padding: 2px 10px;
        font-weight: lighter;
    }
`

const QuestionMenuIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: fit-content;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;

    :hover{
        color: rgb(181, 224, 255)
    }
`

const QuestionMenuContent = styled.div`
    position: absolute;
    top: 3px;
    right: 10px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    z-index: 50;
    padding: 5px;
    width: fit-content;
    border-bottom: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 2px 3px 5px 0px rgb(181, 224, 255, 0.5);
    opacity: ${({ showMenu }) => showMenu ? '1' : '0'};
    visibility: ${({ showMenu }) => showMenu ? 'visible' : 'hidden'};
    
    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        text-align: left;
        margin: 3px 0;
    }

    button:hover{
        color: rgb(181, 224, 255, 1);
    }
`

const QuestionTitle = styled.div`
    margin: 10px 0px 30px 0px;
    border-bottom: 1px solid #fff;

    input{
        font-size: 1.1rem;
        border: none;
        width: 100%;    
        padding: 10px;
        font-weight: lighter;
    }
`

const QuestionContent = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;
    position: relative;

    input[type='text'], textarea {
        border: none;
        width: fit-content;
        font-size: 14px;
        padding: 1px 5px;
        width: 80%;
        resize: none;
    }

    div {
        width: 100%;
    }

    .op{
        position: relative;
        display: flex;
        width: 100%;
        margin: 10px 0;
    }

    .optionAnswer{
        position: absolute;
        right: 0;
        top: 0;
        width: fit-content;
        display: flex;
        align-items: center;
    }

    .optionAnswer button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 22px;
        width: 20px;
        margin: 8px;
    }
`

export default FormCreate