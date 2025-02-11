import PropTypes from 'prop-types';

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img 
        src={destination.image} 
        alt={destination.name}
        className="destination-image"
      />
      <div className="destination-info">
        <h2>{destination.name}</h2>
        <h3>{destination.location}</h3>
        <p>{destination.description}</p>
      </div>
    </div>
  );
}

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationCard;