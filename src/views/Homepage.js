import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { getLinksFromStorage } from '../context/actions/LinkActions';
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
  const [isAsc, setIsAsc] = useState('desc');
  const [sorted, setSorted] = useState([]);
  const [linkCount, setLinkCount] = useState();
  const [indexes, setIndexes] = useState([0, 5]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLinkCount(Math.ceil(links.length / 5));
  }, [links]);

  useEffect(() => {
    console.log(page);
    if (page === 1) {
      setIndexes([0, 5]);
    } else if (page === 2) {
      setIndexes([5, 10]);
    }
  }, [page]);

  useEffect(() => {
    if (isAsc === 'asc') dispatch({ type: 'SORT_LINKS_ASC' });
    else dispatch({ type: 'SORT_LINKS_DESC' });
  }, [isAsc, links]);

  useEffect(() => {
    getLinksFromStorage(dispatch);
  }, []);

  const onChangePage = (rotation) => {
    switch (rotation) {
      case 'forwards':
        if (page !== linkCount) {
          setIndexes([indexes[0] + 5, indexes[1] + 5]);
          setPage(page + 1);
        }
        break;
      case 'backwards':
        if (page !== 1) {
          setIndexes([indexes[0] - 5, indexes[1] - 5]);
          setPage(page - 1);
        }
      default:
        break;
    }
  };
  console.log(indexes);
  return (
    <div className='mt-3 card-container mx-auto w-25 d-flex flex-column'>
      <select
        name='order'
        defaultValue={isAsc}
        onChange={(e) => {
          setIsAsc(e.target.value);
        }}
        className='w-50 mb-3'
      >
        <option disabled>Order By</option>
        <option value='desc'>Descending</option>
        <option value='asc'>Ascending</option>
      </select>
      <AddLinkCard />
      <div className='seperator mt-2'></div>

      {links.length > 0 &&
        links.slice(indexes[0], indexes[1]).map((link, index) => {
          return (
            <div className='mt-4' key={index}>
              <Card
                title={link.title}
                subTitle={link.url}
                points={link.points}
                key={index}
                orderType={isAsc}
              />
            </div>
          );
        })}

      {links.length > 5 && (
        <div className='d-flex mt-5 w-50 mx-auto justify-content-between'>
          <img
            src='/assets/arrow-left-short.svg'
            style={{ width: '20px' }}
            alt=''
            className='pointer'
            onClick={() => onChangePage('backwards')}
          />

          <div className='card w-25 pointer'>
            <span className='text-center ' onClick={() => setPage(1)}>
              1
            </span>
          </div>

          <div className='card w-25 pointer' onClick={() => setPage(2)}>
            <span className='text-center '>2</span>
          </div>

          {linkCount > 2 && (
            <div
              className='card w-25 pointer'
              onClick={() => {
                setIndexes([(linkCount - 1) * 5, linkCount * 5]);
                setPage(linkCount);
              }}
            >
              <span className='text-center '>{linkCount}</span>
            </div>
          )}
          <img
            src='/assets/arrow-right-short.svg'
            style={{ width: '20px' }}
            className='pointer'
            alt=''
            onClick={() => onChangePage('forwards')}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;
