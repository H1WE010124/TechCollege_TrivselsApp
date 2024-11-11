import { useState } from 'react'
import style from './SwipeCard.module.scss'
import TinderCard from 'react-tinder-card'
import {QuestionCard} from '../QuestionCard/QuestionCard'
import {YesNo} from '../YesNo/YesNo'

export const SwipeCard = () => {
    const [cards, setCards] = useState([{id: 1, question: 'Er du glad?'},]);
    const [isDesktop, setIsDesktop] = useState(true);

  return (
<>
    <div>
        {cards.map((item) => (
                        <QuestionCard currentQuestionIndex={item.id - 1} totalQuestions={cards.length}>
                        <p>{item.question}</p>
                        <YesNo callback={()=> console.log('hej')}></YesNo>
                    </QuestionCard>
        ))}
    </div>
</>
  )
}