import React, { useContext } from 'react';
import LinkContext from '../context/contexts/LinkContext';

const Toast = () => {
  const { state } = useContext(LinkContext);
  const { active, text, type } = state?.toast;

  return (
    <div className='toast-container'>
      <div className={`toast ${active ? 'show' : ''} ${type}`}>
        <div className='toast-body text-center'>{text}</div>
      </div>
    </div>
  );
};

export default Toast;
