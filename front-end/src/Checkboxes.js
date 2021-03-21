//referenced source: https://material-ui.com/components/checkboxes/

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = withStyles({
  root: {
    color: '#F7AEF8',
    '&$checked': {
      color: '#F7AEF8',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<CustomCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Remember Password"
      />
      
    </FormGroup>
  );
}
