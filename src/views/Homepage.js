import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const AddLinkCard = () => {
  const navigate = useNavigate();
  const onAddLink = () => {
    navigate('/add');
  };

  return (
    <div className='card-holder pointer w-100 p-2 row' onClick={onAddLink}>
      <div className='square border col-sm-3 d-flex justify-content-center align-items-center'>
        <img src='/assets/plus.svg' style={{ width: '40px' }} alt='' />
      </div>
      <div className='content col-sm-9 d-flex align-items-center '>
        <div className='h3 fw-normal'>SUBMIT A LINK</div>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className='mt-3 card-container mx-auto w-25 d-flex flex-column'>
      <AddLinkCard />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Homepage;
