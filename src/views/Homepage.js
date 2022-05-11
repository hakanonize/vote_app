import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import {
  addLinkToStorage,
  getLinksFromStorage,
} from '../context/actions/LinkActions';
import LinkContext from '../context/contexts/LinkContext';

const AddLinkCard = () => {
  const navigate = useNavigate();
  const onAddLink = () => {
    navigate('/add');
  };

  return (
    <div className='card-holder link pointer w-100 p-2 row' onClick={onAddLink}>
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
  const { state, dispatch } = useContext(LinkContext);
  const { links } = state;

  useEffect(() => {
    getLinksFromStorage(dispatch);
  }, []);

  return (
    <div className='mt-3 card-container mx-auto w-25 d-flex flex-column'>
      <AddLinkCard />
      <div className='seperator mt-2'></div>
      {links.length > 0 &&
        links.map((link, index) => {
          return (
            <Card
              title={link.title}
              subTitle={link.url}
              points={link.points}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default Homepage;
