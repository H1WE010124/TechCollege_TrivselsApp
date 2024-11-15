import React from "react";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { generateUUID } from "../../utils/generateUUID";

export const UUIDGenerator = () => {
  const [uuid, setUUID] = useState("");

  const handleGenerateUUID = () => {
    setUUID(generateUUID());
  };

  return (
    <>
      <Box>
        <Typography>Generate UUID: {uuid} </Typography>
        <Button onClick={handleGenerateUUID}>Generate UUID</Button>
      </Box>
    </>
  );
};
