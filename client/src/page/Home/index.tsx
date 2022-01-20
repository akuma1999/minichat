import * as React from 'react';
import * as io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/reducers/index';
const socket = io.connect('https://chat-app-mini.herokuapp.com/', {
  transports: ['websocket']
});

// import mui
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
//

// import icon
import { AiOutlineSend } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
//

// import style
import './style.css';
//

export default function Home() {
  const name = useSelector((state: RootState) => state.common.name);
  const [comment, setComment] = React.useState('');
  const [members, setMembers] = React.useState([]);
  const [openInfo, setOpenInfor] = React.useState(false);
  React.useEffect(() => {
    socket.connect();
    const data = { name: name };
    socket.emit('join', data);

    const box = document.getElementById('body-box');

    socket.on('persion_join', (res: any) => {
      console.log(res);
      box.innerHTML += `<div class='home-toast'>${res.message}</div>`;
      setMembers(res.users);
    });
    socket.on('client-out', (res: any) => {
      box.innerHTML += `<div class='home-toast'>${res.message}</div>`;
      setMembers(res.users);
    });
    socket.on('sever-to-client', (data: any) => {
      if (data.name === name) {
        box.innerHTML += `<div class='home-text-right'>
                            <span class='comment-title'>tôi</span>
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
    if (comment !== '') {
      socket.emit('client-to-sever', { name: name, comment: comment });
      setComment('');
    }
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

  const renderInfor = () => {
    console.log(members);
    if (openInfo) {
      return (
        <div
          className='info-room'
          id='info-room'
          onClick={() => setOpenInfor(false)}>
          {members.map((item: string) => (
            <div className='info-room-item' key={item}>
              {item}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className='detail' onClick={() => setOpenInfor(true)}>
          {members.length} member đang online <BsFillCaretDownFill />
        </div>
      );
    }
  };
  return (
    <div className='home-box-root'>
      {renderInfor()}
      <p className='home-title'>Trò chuyện mini</p>
      <div className='home-body' id='body-box'></div>
      <div className='comment-box'>{renderComment()}</div>
    </div>
  );
}
