import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import Toast from './components/Toast';
import LinkContext from './context/contexts/LinkContext';
import AddLink from './views/AddLink';
import Homepage from './views/Homepage';

function App() {
  const { state } = useContext(LinkContext);

  return (
    <div className='container'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={<AddLink />} />
        </Routes>
      </Router>
      <Toast />
      {state.deleteModal.active && <Modal />}
    </div>
  );
}

export default App;
