import React from 'react';

const BadgeListItem = (props) => {
  return (
    <div className="badges-list__item">
      <img
        className="badges-list__avatar"
        src={props.badge.avatarUrl}
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
