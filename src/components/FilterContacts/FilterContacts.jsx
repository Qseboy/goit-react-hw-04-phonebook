import PropTypes from 'prop-types';
export default function FilterContacts({
  title,
  handleFilter,
  state: { filter },
}) {
  return (
    <>
      <h3>{title}</h3>
      <input
        className="input-field"
        type="text"
        name="filter"
        value={filter}
        onChange={event => handleFilter(event)}
      />
    </>
  );
}

FilterContacts.propTypes = {
  title: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  state: PropTypes.shape({ filter: PropTypes.string.isRequired }).isRequired,
};
