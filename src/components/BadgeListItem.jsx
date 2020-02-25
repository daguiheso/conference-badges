import React from 'react';
import Gravatar from './Gravatar';
import { FiEdit3, FiDelete, FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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

      <div className="options">
        <Link to={`/badges/${props.badge.id}`}>
          <FiInfo className="detail" />
        </Link>
        <Link to={`/badges/${props.badge.id}/edit`}>
          <FiEdit3 className="edit mx-3" />
        </Link>
        <Link to="">
          <FiDelete className="delete" />
        </Link>
      </div>
    </div>
  );
};

export default BadgeListItem;
