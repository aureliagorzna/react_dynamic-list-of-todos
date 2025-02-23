import React from 'react';
import { FilterCase } from '../../types/Filter';

interface Props {
  query: string;
  setQuery: (v: string) => void;
  setFilterBy: (v: FilterCase) => void;
}

export const TodoFilter: React.FC<Props> = ({
  query,
  setQuery,
  setFilterBy,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          onChange={(e) => setFilterBy(e.target.value as FilterCase)}
        >
          <option value={FilterCase.All}>All</option>
          <option value={FilterCase.Active}>Active</option>
          <option value={FilterCase.Completed}>Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {query && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => setQuery('')}
          />
        </span>
      )}
    </p>
  </form>
);
