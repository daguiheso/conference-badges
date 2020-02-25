import React from 'react'
import md5 from 'md5';

const Gravatar = (props) => {
  const { email, className, alt } = props;
  const hash = md5(email);
  return (
    <img
      className={className}
      src={`https://gravatar.com/avatar/${hash}?d=identicon`}
      alt={alt}
    />
  );
};

export default Gravatar;

