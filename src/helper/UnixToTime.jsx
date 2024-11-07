

export const UnixToTime = ({ unixTimestamp }) => {
  const convertUnixToDate = (timestamp) => {
    return new Date(timestamp * 1000); 
  };

  const date = convertUnixToDate(unixTimestamp);

};

