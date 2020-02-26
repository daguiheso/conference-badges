import React, { useState, useMemo } from 'react';
import BadgesListItem from '../components/BadgeListItem';
import '../assets/styles/components/BadgesList.css';

const useSearchBadges = (badges) => {
  const [query, setQuery] = useState('');
  const [filteredBadges, setFilteredBadges] = useState(badges);

  useMemo(
    () => {
      const result = badges.filter(badge => {
        return `
          ${badge.firstName}
          ${badge.toLowerCase}
          ${badge.twitter}
          ${badge.jobTitle}
        `
          .toLowerCase()
          .includes(query)
      });
      setFilteredBadges(result);
    }, [badges, query]
  );

  return { query, setQuery, filteredBadges };
}

const BadgesList = (props) => {

  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);
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
