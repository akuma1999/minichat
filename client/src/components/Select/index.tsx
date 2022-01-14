import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface OptionItem {
  value: string;
  name: string;
}

interface Props {
  title: string;
  value: string;
  options: Array<OptionItem>;
  handleChange: any;
}

export default function SelectBox(props: Props) {
  const { title, value, options, handleChange } = props;

  const renderItem = options.map((item: OptionItem, index: number) => {
    return (
      <MenuItem key={item.value} value={item.value}>
        {item.name}
      </MenuItem>
    );
  });
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{title}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={title}
          onChange={handleChange}>
          {renderItem}
        </Select>
      </FormControl>
    </Box>
  );
}
