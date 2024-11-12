import { useEffect } from "react";
import style from "./SwipeCard.module.scss";
import TinderCard from "react-tinder-card";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { YesNo } from "../YesNo/YesNo";
import { useMediaQuery } from "@mui/material";

export const SwipeCard = ({
  array,
  callback,
  currentQuestionIndex,
  question,
}) => {

    const isDesktop = useMediaQuery('(min-width: 600px)')

    useEffect(()=>{
        console.log(isDesktop)
    },[isDesktop])

  return (
    <>
      {isDesktop && (
        <QuestionCard
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={array?.length}
        >
          <p>{question}</p>
          <YesNo callback={callback} />
        </QuestionCard>
      )}

      {!isDesktop && (
        <div className={style.cardContainer}>
          {array && array
            .slice()
            .reverse()
            .map((item, index) => (
              <TinderCard
                key={item.id}
                className={style.swipe}
                preventSwipe={["up", "down"]}
              >
                <div className={style.swipeCard}>
                  <QuestionCard
                    currentQuestionIndex={array.length - 1 - index}
                    totalQuestions={array.length}
                  >
                    <p>{question}</p>
                    <YesNo callback={callback} />
                  </QuestionCard>
                </div>
              </TinderCard>
            ))}
        </div>
      )}
    </>
  );
};
