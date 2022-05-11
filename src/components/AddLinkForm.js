import React, { useContext, useState } from 'react';
import { addLinkToStorage } from '../context/actions/LinkActions';
import LinkContext from '../context/contexts/LinkContext';
import { isLinkValid } from '../context/utils/validator';

const AddLinkForm = () => {
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const { state, dispatch } = useContext(LinkContext);
  const { links } = state;
  const onSubmit = () => {
    const isValid = name && url && isLinkValid(url);
    if (isValid) {
      const success = addLinkToStorage(
        dispatch,
        { title: name, url: url, points: 0 },
        links
      );
      success && alert('SuccessFully Added');
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
