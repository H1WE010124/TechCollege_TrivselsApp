import React from 'react'
import { useState } from 'react'
import { generateUUID } from '../../utils/generateUUID';

export const UUIDGenerator = () => {
    const [uuid, setUUID] = useState('');

    const handleGenerateUUID = () => {
        setUUID(generateUUID());
    };

  return (
    <>
        <div>
            <p>Generate UUID: {uuid} </p>
            <button onClick={handleGenerateUUID}>Generate UUID</button>
        </div>
    </>
  );
};
