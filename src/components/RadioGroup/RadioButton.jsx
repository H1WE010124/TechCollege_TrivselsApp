import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export const RadioButton = ({amount, callback}) => {
  const radioAmount = [];
  for (let i = 1; i <= amount; i++) {
    radioAmount.push(i);
  }

  return (
    <RadioGroup
    aria-labelledby="Radio buttons"
    defaultValue={1}
    name="radio-buttons-group"
    onChange={callback}
  >
    {radioAmount.map((item) => {
      return (
        <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
      )
    })}
  </RadioGroup>
  )
}