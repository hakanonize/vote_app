import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addLinkToStorage } from '../context/actions/LinkActions';
import LinkContext from '../context/contexts/LinkContext';
import { isLinkValid } from '../utils/validator';
import Toast from './Toast';

const AddLinkForm = () => {
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const { state, dispatch } = useContext(LinkContext);
  const { links } = state;
  const navigate = useNavigate();

  const onSubmit = () => {
    const isValid = name && url && isLinkValid(url);
    if (isValid) {
      const success = addLinkToStorage(
        dispatch,
        {
          title: name,
          url: url,
          points: 0,
          lastModify: Date.parse(new Date()),
        },
        links
      );
      if (success) {
        dispatch({
          type: 'TOAST_ON',
          payload: { text: `${name} added`, type: 'success' },
        });
        setTimeout(() => dispatch({ type: 'TOAST_OFF' }), 2000);
        navigate(-1);
      } else {
        dispatch({
          type: 'TOAST_ON',
          payload: {
            text: `Name should be unique `,
            type: 'error',
          },
        });
        setTimeout(() => dispatch({ type: 'TOAST_OFF' }), 2000);
      }
    } else {
      dispatch({
        type: 'TOAST_ON',
        payload: {
          text: `URL should be valid`,
          type: 'error',
        },
      });
      setTimeout(() => dispatch({ type: 'TOAST_OFF' }), 2000);
    }
  };

  return (
    <>
      <form>
        <div className='form-group mt-4'>
          <label htmlFor='name'>Link Name:</label>
          <input
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            className='form-control'
            placeholder='MDN'
          />
        </div>

        <div className='form-group mt-3'>
          <label htmlFor='url'>Link URL:</label>
          <input
            type='text'
            name='url'
            onChange={(e) => setUrl(e.target.value)}
            className='form-control'
            placeholder='https://developer.mozilla.org'
          />
        </div>
      </form>

      <div
        className='btn btn-lg btn-dark mt-3 float-end round'
        onClick={onSubmit}
      >
        ADD
      </div>
    </>
  );
};

export default AddLinkForm;
