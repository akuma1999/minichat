import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/reducers/index';
import * as actions from '../../Redux/actions/common';

// import css
import './style.css';
//

// import mui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//

// import component
import Select from '../../components/Select';
//

export default function LoginPage() {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();

  const handleTextChange = (e: any) => {
    setName(e.target.value);
  };

  const submit = () => {
    if (name === '') {
      alert('chưa điền tên mà ?');
    } else {
      dispatch(actions.change_current_name(name));
    }
  };
  return (
    <div className='login-box'>
      <div className='login-box-item'>
        <p className='login-title'>Chọn 1 cái tên nào</p>
        <div>
          <TextField
            id='name'
            label='Tên Hiển thị'
            variant='outlined'
            onChange={(e: any) => handleTextChange(e)}
            value={name}
            fullWidth={true}
          />
        </div>

        <div>
          <Button
            onClick={() => submit()}
            variant='contained'
            color='primary'
            fullWidth={true}>
            Chat thôi !!
          </Button>
        </div>
      </div>
    </div>
  );
}
