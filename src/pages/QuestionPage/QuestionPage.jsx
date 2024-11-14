import { Box, Typography } from '@mui/material';
import { QuestionStepper } from '../../components/QuestionStepper/QuestionStepper';
import { useContext, useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { CustomSelect } from '../../components/Select/Select';
import { QuestionCard } from '../../components/QuestionCard/QuestionCard';
import { SwipeCard } from '../../components/SwipeCard/SwipeCard';
import { IconButton } from '../../components/IconButton/IconButton';
import { Question } from '../../components/Question/Question';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { SubmissionStatusPage } from '../../pages/SubmissionStatusPage/SubmissionStatusPage';
import { supabase } from '../../lib/supabaseClient';
import { UserContext } from '../../context/UserContext';
import { AppButton } from '../../components/AppButton/AppButton';
import { NavLink } from 'react-router-dom';
import { classes } from '../../lib/data';

export const QuestionPage = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);
  const [subSelect, setSubSelect] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [studentError, setStudentError] = useState(null);

  // Get the Token
  const { accessToken } = useContext(UserContext);

  // Get the questions
  const data = useGet('questions');

  // Logging
  console.log('Token: ', accessToken);
  console.log('Subselect: ', subSelect);
  console.log('Questions: ', data);

  useEffect(() => {
    console.log('Answers are; ', userAnswers);
  }, [userAnswers]);

  // function to update state with answers
  const handleAnswer = (question, answer) => {
    setUserAnswers((prev) => [
      ...prev,
      {
        student_id: accessToken,
        question_id: question.id,
        option_id: answer,
      },
    ]);
    setCurrentIndex((prev) => prev + 1);
  };

  // Function to remove last answer when going back
  const handleAnswerBack = () => {
    let clone = [...userAnswers];
    clone.pop();
    setUserAnswers(clone);
  };

  // Function to submit answers to supabase
  const handleSubmit = async () => {
    const { error } = await supabase.from('student_responses').insert(userAnswers);
    console.log('res', error);
  };

  // Function to set the selected class
  const handleSelectClass = (classValue) => {
    setSelectedClass(classValue);
  };

  // Break questions into two arrays
  const positiveQuestions = data?.data?.filter((item) => item.section_id === 1);
  const negativeQuestions = data?.data?.filter((item) => item.section_id === 2);
  const questions = [negativeQuestions, positiveQuestions];

  // Effect to check if form is done and submit answers
  useEffect(() => {
    if (currentIndex === questions[subSelect]?.length) {
      setIsDone(true);
      handleSubmit();
    }
  }, [currentIndex]);

  // Creates a user in Supabase when they have selected Class
  useEffect(() => {
    const createUserInDB = async () => {
      if (accessToken && selectedClass) {
        console.log('Token: ', accessToken);
        const { error } = await supabase.from('students').insert({ id: accessToken, class_name: selectedClass });
        setStudentError(error);
        //console.log("student creation: ", error.code);
      }
    };
    createUserInDB();
  }, [selectedClass]);

  return (
    <Box>
      {studentError && studentError.code === '23505' ? (
        <>
          <Typography variant='h4'>Du har allerede udfyldt formularen</Typography>
          <NavLink to='/'>
            {' '}
            <AppButton buttonText={'Gå tilbage'}></AppButton>
          </NavLink>
        </>
      ) : isDone ? (
        <SubmissionStatusPage status={'success'} />
      ) : selectedClass === null ? (
        <>
          <Typography
            variant='h4'
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#2E7D32',
            }}
          >
            Velkommen
          </Typography>
          <br></br>
          <CustomSelect OptionsArray={classes} callback={handleSelectClass} defaultText={'Vælg klasse'} />
        </>
      ) : subSelect === null ? (
        <QuestionCard currentQuestionIndex={0} totalQuestions={1}>
          <Typography variant='h4' sx={{ fontSize: { lg: '2.8rem', xs: '2rem' }, padding: '32px' }}>
            Har i dag været en god dag?
          </Typography>
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <IconButton callback={() => setSubSelect(0)} styling='yesnoButtons' value='0'>
              <ThumbDownIcon style={{ fill: '#2E7D32' }} />
            </IconButton>
            <IconButton callback={() => setSubSelect(1)} styling='yesnoButtons' value='1'>
              <ThumbUpIcon style={{ fill: '#2E7D32' }} />
            </IconButton>
          </Box>
        </QuestionCard>
      ) : (
        <>
          <QuestionStepper totalSteps={questions[subSelect]?.length} currentStep={currentIndex} setCurrentStep={setCurrentIndex} backAction={handleAnswerBack} />
          {subSelect == 0 ? (
            <SwipeCard
              array={questions[subSelect]}
              callback={handleAnswer}
              currentQuestionIndex={currentIndex}
              question={questions[subSelect][currentIndex]?.question}
            />
          ) : (
            <QuestionCard currentQuestionIndex={currentIndex} totalQuestions={questions[subSelect].length}>
              <Question question={questions[subSelect][currentIndex]?.question} callback={handleAnswer} array={questions[subSelect]} currentIndex={currentIndex} />
            </QuestionCard>
          )}
        </>
      )}
    </Box>
  );
};
