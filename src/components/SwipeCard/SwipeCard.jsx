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
  const isDesktop = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    console.log(isDesktop);
  }, [isDesktop]);

  const onSwipe = (dir) => {
    if (dir === "left") {
      callback(array[currentQuestionIndex], 0);
    } else callback(array[currentQuestionIndex], 1);
  };

  return (
    <>
      {isDesktop && (
        <QuestionCard
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={array?.length}
        >
          <p>{question}</p>
          <YesNo
            callback={callback}
            array={array}
            currentIndex={currentQuestionIndex}
          />
        </QuestionCard>
      )}

      {!isDesktop && (
        <div className={style.cardContainer}>
          {array &&
            array
              .slice()
              .reverse()
              .map((item, index) => (
                <TinderCard
                  key={item.id}
                  className={style.swipe}
                  preventSwipe={["up", "down"]}
                  onSwipe={onSwipe}
                >
                  <div className={style.swipeCard}>
                    <QuestionCard
                      currentQuestionIndex={currentQuestionIndex}
                      totalQuestions={array.length}
                    >
                      <p>{question}</p>
                      <YesNo
                        callback={callback}
                        array={array}
                        currentIndex={currentQuestionIndex}
                      />
                    </QuestionCard>
                  </div>
                </TinderCard>
              ))}
        </div>
      )}
    </>
  );
};
