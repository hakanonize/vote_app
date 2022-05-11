import React from 'react';

const AddLinkForm = () => {
  return (
    <>
      <form>
        <div className='form-group mt-4'>
          <label htmlFor='name'>Link Name:</label>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='MDN'
          />
        </div>

        <div className='form-group mt-3'>
          <label htmlFor='url'>Link URL:</label>
          <input
            type='text'
            name='url'
            className='form-control'
            placeholder='https://developer.mozilla.org'
          />
        </div>
      </form>

      <div className='btn btn-lg btn-dark mt-3 float-end round'>ADD</div>
    </>
  );
};

export default AddLinkForm;
