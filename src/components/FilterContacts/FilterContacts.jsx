import PropTypes from 'prop-types';
export default function FilterContacts({ title, handleFilter, filter }) {
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
  filter: PropTypes.string.isRequired,
};
