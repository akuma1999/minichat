import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

//
import { RootState } from '../Redux/reducers/index';
//

// import component
import Home from './Home';
import Join from './Join';
//

export default function Root() {
  const name = useSelector((state: RootState) => state.common.name);

  const check = () => {
    if (name === '') {
      return (
        <>
          <Route path='/minichat' element={<Join />} />
          <Route path='*' element={<div>notfound</div>} />
        </>
      );
    } else {
      return (
        <>
          <Route path='/minichat' element={<Home />} />
          <Route path='*' element={<div>notfound</div>} />
        </>
      );
    }
  };
  return <Routes>{check()}</Routes>;
}
