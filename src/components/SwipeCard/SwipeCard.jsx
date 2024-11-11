import { useState } from 'react'
import style from './SwipeCard.module.scss'
import TinderCard from 'react-tinder-card'
import {QuestionCard} from '../QuestionCard/QuestionCard'
import {YesNo} from '../YesNo/YesNo'

export const SwipeCard = () => {
    const [cards, setCards] = useState([{id: 1, question: 'Er du glad?'}, {id: 2, question: 'Er du sur?'}, {id: 3, question: 'Er du trist?'}]);

  return (
<>
{isDesktop && (
    <div>
        {cards.map((item) => {
            <QuestionCard currentQuestionIndex={item.id - 1} totalQuestions={cards.length}>
                <YesNo></YesNo>
            </QuestionCard>
        })}
    </div>
)}
</>
  )
}