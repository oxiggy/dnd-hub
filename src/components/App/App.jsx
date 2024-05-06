import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
// Views
import SignIn from '@/views/SignIn/SignIn.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<SignIn />} />
    </Routes>
  )
}

export default memo(App);