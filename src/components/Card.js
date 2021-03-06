import React, { useContext, useEffect, useRef, useState } from 'react';
import { voteLink } from '../context/actions/LinkActions';
import LinkContext from '../context/contexts/LinkContext';
import Modal from './Modal';

const Card = ({
  title = 'Stack Overflow',
  subTitle = 'http://stackoverflow.com',
  points = 0,
  orderType,
}) => {
  const [hovered, setHovered] = useState(false);
  const { dispatch } = useContext(LinkContext);

  const onVote = (isUp) => {
    voteLink(dispatch, { title: title, url: subTitle, points: points }, isUp);
    if (orderType === 'asc') dispatch({ type: 'SORT_LINKS_ASC' });
    else dispatch({ type: 'SORT_LINKS_DESC' });
  };

  const onDelete = () => {
    dispatch({ type: 'MODAL_ON', payload: title });
  };

  return (
    <div
      className='card-holder w-100 p-2 row pointer'
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <div className='square border col-sm-3 d-flex justify-content-center align-items-center'>
        {/* <img src='/assets/plus.svg' style={{ width: '40px' }} alt='' /> */}
        <div className='d-flex flex-column'>
          <p style={{ margin: '0', fontSize: '22px' }} className='text-center'>
            {points}
          </p>
          <p style={{ margin: '0' }}>POINTS</p>
        </div>
      </div>
      <div className='content col-sm-9'>
        <div className='d-flex flex-column h-100 justify-content-between'>
          <div>
            <div className='h4' style={{ margin: '0' }}>
              {title}
            </div>
            <div className='text-secondary'>{subTitle}</div>
          </div>

          <div className='d-flex justify-content-between'>
            <div className='d-flex pointer' onClick={() => onVote(true)}>
              <img
                src='/assets/arrow-up-short.svg'
                style={{ width: '20px' }}
                alt=''
              />
              <div className='text-secondary pt-1'>Up Vote</div>
            </div>
            <div className='d-flex pointer' onClick={() => onVote(false)}>
              <img
                src='/assets/arrow-down-short.svg'
                style={{ width: '20px' }}
                alt=''
              />
              <div className='text-secondary pt-1'>Down Vote</div>
            </div>
          </div>
        </div>
      </div>
      {hovered && (
        <img
          src='/assets/dash-circle-fill.svg'
          className='position-absolute'
          style={{ width: '35px', right: '-13px', top: '-3px' }}
          alt=''
          onClick={onDelete}
        />
      )}
    </div>
  );
};

export default Card;
