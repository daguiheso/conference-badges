import React from 'react';
import BadgesListItem from '../components/BadgeListItem';
import '../assets/styles/components/BadgesList.css';

const BadgesList = (props) => {
  return (
    <div className="badges-list">
      <ul className="list-unstyled">
        { props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default BadgesList;
