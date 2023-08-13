import PropTypes from 'prop-types';
export default function FilterContacts({ title, setFilter, filter }) {
  return (
    <>
      <h3>{title}</h3>
      <input
        className="input-field"
        type="text"
        name="filter"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
    </>
  );
}

FilterContacts.propTypes = {
  title: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
