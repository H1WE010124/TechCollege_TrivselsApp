import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const potions = [
  { id: 1, name: '8A' },
  { id: 2, name: '8B' },
  { id: 3, name: '8C' }
];

function PotionForm() {
  const [selectedPotion, setSelectedPotion] = useState('');

  const handleSelectChange = (event) => {
    const selectedPotionName = event.target.value;
    setSelectedPotion(selectedPotionName);
    console.log(`Selected: ${selectedPotionName}`);

    // Call a specific function based on the selected option
    if (selectedPotionName === '8A') {
      heal();
    } else if (selectedPotionName === '8B') {
      becomeInvisible();
    } else if (selectedPotionName === '8C') {
      gainStrength();
    }
  };

  // Functions for each potion action
  const heal = () => console.log("8A!");
  const becomeInvisible = () => console.log("8B");
  const gainStrength = () => console.log("8C");

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="potion-select-label">Klasse</InputLabel>
      <Select
        labelId="potion-select-label"
        id="potion-select"
        value={selectedPotion}
        onChange={handleSelectChange}
        label="Klasse"
      >
        <MenuItem value="">
          <em>Klasse</em>
        </MenuItem>
        {potions.map((potion) => (
          <MenuItem key={potion.id} value={potion.name}>
            {potion.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PotionForm;
