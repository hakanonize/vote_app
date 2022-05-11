import React, { useContext } from 'react';
import { voteLink } from '../context/actions/LinkActions';
import LinkContext from '../context/contexts/LinkContext';

const Card = ({
  title = 'Stack Overflow',
  subTitle = 'http://stackoverflow.com',
  points = 0,
}) => {
  const { dispatch } = useContext(LinkContext);
  const onVote = (isUp) => {
    voteLink(dispatch, { title: title, url: subTitle, points: points }, isUp);
  };
  return (
    <div className='card-holder w-100 p-2 row'>
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
    </div>
  );
};

export default Card;
