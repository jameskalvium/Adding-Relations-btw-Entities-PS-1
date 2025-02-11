import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, destination }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="modal-image"
        />
        <h2>{destination.name}</h2>
        <h3>{destination.location}</h3>
        <p>{destination.description}</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Modal;