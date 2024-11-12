import {CustomSelect} from './Select'

export const Options = () => {
    const options = ['8.klasse', '9.klasse', '10.klasse'];

    const handleSelectChange = (value) => {
      console.log('Selected value:', value);
    };
  
    return (
      <div>
        <CustomSelect
          OptionsArray={options}
          callback={handleSelectChange}
          defaultText="Vælg din klasse"
        />
      </div>
    );
  };
  