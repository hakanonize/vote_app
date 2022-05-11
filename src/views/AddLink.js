import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddLinkForm from '../components/AddLinkForm';

const AddLink = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  return (
    <div className='mt-3 w-25 mx-auto'>
      <div className='d-flex pointer' onClick={navigateHome}>
        <img
          src='/assets/arrow-left-short.svg'
          style={{ width: '20px' }}
          alt=''
        />
        <div className='ps-1'>Return to List </div>
      </div>
      <div className='h3 fw-normal mt-4'>Add New Link</div>
      <AddLinkForm />
    </div>
  );
};

export default AddLink;
