import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { BackButton } from "../../components/BackButton/BackButton";
import { SvarGraf } from "../../components/SvarGraf/SvarGraf";
import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomSelect } from "../../components/Select/Select";

export const AdminPage = () => {
  const [studentData, setStudentData] = useState(null);
  const [questionDataPos, setQuestionDataPos] = useState(null);
  const [questionDataNeg, setQuestionDataNeg] = useState(null);
  const [selectedClass, setSelectedClass] = useState("8U");
  const classArray = ["8U", "8V", "9U", "9V"];

  useEffect(() => {
    const getAllQuestions = async () => {
      const { data, error } = await supabase.from("questions").select("*");
      if (error) {
        console.error("Error: ", error);
        throw new Error(error.message);
      } else if (data && data.length > 0) {
        let arr = [];
        for (let x = 0; x < 2; x++) {
          let n = data?.filter((item) => item.section_id === x + 1);
          arr.push(n);
        }
        setQuestionDataPos(arr[0]);
        setQuestionDataNeg(arr[1]);
      }
    };
    getAllQuestions();
  }, []);

  useEffect(() => {
    const getTodaysData = async () => {
      const { data, error } = await supabase
        .from("student_responses")
        .select("*, students (class_name)")
        .gt(
          "created_at",
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}T08:00:32.236853+00:00`
        );

      if (error) {
        console.log("Der opstod en fejl:", error);
        throw new Error(error);
      } else {
        console.log(data.sort((a, b) => a.student_id > b.student_id));
        let filteredData = filterByClass(data).map((item, index) => {
          let sorted = filterByQuestion(item, index);
          console.log("sorted", sorted);
          return { class: classArray[index], data: sorted };
        });
        // let res = filteredData?
        setStudentData(filteredData);
      }
    };
    getTodaysData();
  }, [questionDataPos]);

  const filterByClass = (array) => {
    let c1 = array.filter((item) => item.students.class_name === classArray[0]);
    let c2 = array.filter((item) => item.students.class_name === classArray[1]);
    let c3 = array.filter((item) => item.students.class_name === classArray[2]);
    let c4 = array.filter((item) => item.students.class_name === classArray[3]);
    return [c1, c2, c3, c4];
  };

  const filterByQuestion = (array, index) => {
    const questionArray = [
      {
        title: "Det var en god dag",
        data: questionDataPos?.map((entry) => {
          return {
            id: entry.id,
            q: entry.question,
            a: array?.map((item) => {
              if (entry.id === item.question_id) {
                return item.option_id;
              } else {
                return 0;
              }
            }),
          };
        }),
        class: classArray[index],
      },
      {
        title: "Det var ikke en god dag",
        data: questionDataNeg?.map((entry) => {
          return {
            id: entry.id,
            q: entry.question,
            a: array?.map((item) => {
              if (entry.id === item.question_id) {
                return item.option_id;
              } else {
                return 0;
              }
            }),
          };
        }),
        class: classArray[index],
      },
    ];
    return questionArray;
  };
  return (
    <Box
      sx={{
        marginTop: "32px",
        display: "flex",
        gap: "16px",
        flexDirection: "column",
      }}
    >
      <Typography variant="p">
        Her kan du se statistik for den pågældende dag
      </Typography>

      <CustomSelect
        OptionsArray={classArray}
        callback={setSelectedClass}
        defaultText={"Vælg en klasse"}
      />

      {studentData?.map(
        (item, index) =>
          item.class == selectedClass && (
            <>
              <Typography key={index + item.class} variant="h4">
                {item.class}
              </Typography>
              {item.data?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Typography variant="h5">{item.title}</Typography>
                  {item.data?.map((item, index) => (
                    <Box key={item.q + index}>
                      {item.id === 1 || item.id === 2 || item.id === 3 ? (
                        <SvarGraf
                          data={item.a}
                          question={item.q}
                          isbool={false}
                        />
                      ) : (
                        <SvarGraf
                          data={item.a}
                          question={item.q}
                          isbool={true}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              ))}
            </>
          )
      )}
    </Box>
  );
};
