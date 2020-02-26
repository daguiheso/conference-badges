import React, { useState } from 'react';
import BadgesListItem from '../components/BadgeListItem';
import '../assets/styles/components/BadgesList.css';

const BadgesList = (props) => {
  const [query, setQuery] = useState('');
  const filteredBadges = props.badges.filter(badge => {
    return `
      ${badge.firstName}
      ${badge.toLowerCase}
      ${badge.twitter}
      ${badge.jobTitle}
    `.toLowerCase()
     .includes(query)
  });

  const handleOnChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="badges-list">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={handleOnChangeQuery}
        />
      </div>
      <ul className="list-unstyled">
        { filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <BadgesListItem
                badge={badge}
                onToggleModal={props.onToggleModal}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default BadgesList;
