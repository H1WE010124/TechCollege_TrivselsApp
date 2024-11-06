import React, { useState } from 'react';

export function UnixToTime({ unixTimestamp }) {

  const convertUnixToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date;
  };

  const date = convertUnixToDate(unixTimestamp);

  const formattedDate = date.toLocaleString(); 

  return (
    <div>
      <h3>Converted Date and Time</h3>
      <p>{formattedDate}</p>
    </div>
  );
}


