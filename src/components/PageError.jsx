import React from 'react';
import '../assets/styles/components/PageError.css';


const PageError = (props) => (
  <div className="page-error">
    ❌{props.error.message} 😱
  </div>
);

export default PageError;
