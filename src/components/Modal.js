import React, { useContext } from 'react';
import LinkContext from '../context/contexts/LinkContext';

const Modal = () => {
  const { state, dispatch } = useContext(LinkContext);
  const { active, name } = state.deleteModal;

  const onDelete = () => {
    dispatch({ type: 'DELETE_LINK', payload: name });
    dispatch({
      type: 'TOAST_ON',
      payload: {
        text: `Successfully deleted ${name}`,
        type: 'success',
      },
    });
    setTimeout(() => dispatch({ type: 'TOAST_OFF' }), 2000);
    dispatch({ type: 'MODAL_OFF' });
  };

  return (
    <div className='modal-holder'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Remove Link</h5>
            <button
              type='button'
              className='btn-close btn-close-white'
              onClick={() => dispatch({ type: 'MODAL_OFF' })}
            ></button>
          </div>
          <div className='modal-body'>
            <h5 className='text-secondary text-center'>
              Do you want to remove:
            </h5>
            <div className='h2 text-center fw-bold'>{name}</div>
          </div>
          <div className='modal-footer justify-content-center'>
            <button
              type='button'
              className='btn btn-md w-25 btn-dark round'
              onClick={onDelete}
            >
              OK
            </button>
            <button
              type='button'
              className='btn btn-md w-25 btn-dark round'
              onClick={() => dispatch({ type: 'MODAL_OFF' })}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
