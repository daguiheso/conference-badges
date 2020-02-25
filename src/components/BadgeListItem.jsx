import React from 'react';
import Gravatar from './Gravatar';

const BadgeListItem = (props) => {
  return (
    <div className="badges-list__item">
      <Gravatar
        className="badges-list__avatar"
        email={props.badge.email}
        alt={`${props.badge.firstName} ${props.badge.lastName}`}
      />

      <div>
        <strong>
          {props.badge.firstName} {props.badge.lastName}
        </strong>
        <br />@{props.badge.twitter}
        <br />
        {props.badge.jobTitle}
      </div>
    </div>
  );
};

export default BadgeListItem;
