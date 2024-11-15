import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = `${time.getHours()}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <Box
      sx={
        {
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // bgcolor: 'primary.light',
          // borderRadius: 1,
          // padding: 2,
          // width: 'fit-content',
          // mx: 'auto',
        }
      }
    >
      <Typography
        variant="h2"
        component="div"
        // color="primary.main"
        fontWeight="bold"
      >
        {formattedTime}
      </Typography>
    </Box>
  );
};
