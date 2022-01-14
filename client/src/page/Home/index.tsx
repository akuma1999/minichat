import * as React from 'react';
import * as io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/reducers/index';
const socket = io.connect('http://localhost:3000', {
  transports: ['websocket']
});

// import mui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//

// import icon
import { AiOutlineSend } from 'react-icons/ai';
//

// import style
import './style.css';
//

// import icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle, AiOutlineHome } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
//

export default function Home() {
  const name = useSelector((state: RootState) => state.common.name);
  const [comment, setComment] = React.useState('');
  React.useEffect(() => {
    socket.connect();

    socket.emit('join', { name: name });

    const box = document.getElementById('body-box');
    socket.on('persion_join', (text) => {
      box.innerHTML += `<div class='home-toast'>${text}</div>`;
    });
    socket.on('client-out', (text) => {
      box.innerHTML += `<div class='home-toast'>${text}</div>`;
    });
    socket.on('sever-to-client', (data: any) => {
      if (data.name === name) {
        box.innerHTML += `<div class='home-text-right'>
                            <span class='comment-title'>${data.name}</span>
                            <span class='comment-body'>
                              ${data.comment}
                            </span>
                          </div>`;
      } else {
        box.innerHTML += `<div class='home-text-left'>
                            <span class='comment-title'>${data.name}</span>
                            <span class='comment-body'>
                              ${data.comment}
                            </span>
                          </div>`;
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const send_text = () => {
    console.log(comment);
    socket.emit('client-to-sever', { name: name, comment: comment });
  };

  const renderComment = () => {
    return (
      <>
        <div className='comment-text'>
          <TextField
            id='name'
            label='nội dung bình luận'
            variant='outlined'
            onChange={(e: any) => changeComment(e)}
            size='small'
            value={comment}
            fullWidth={true}
          />
        </div>
        <div className='comment-send' id='btn-send' onClick={() => send_text()}>
          <IconButton>
            <AiOutlineSend />
          </IconButton>
        </div>
      </>
    );
  };

  const changeComment = (e: any) => {
    setComment(e.target.value);
  };

  return (
    <div className='home-box-root'>
      <p className='home-title'>Thông báo</p>
      <div className='home-body' id='body-box'></div>
      <div className='comment-box'>{renderComment()}</div>
    </div>
  );
}
