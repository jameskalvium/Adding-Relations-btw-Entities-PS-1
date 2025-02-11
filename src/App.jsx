import DestinationCard from './components/DestinationCard';
import './App.css';

const destinations = [
  {
    id: 1,
    name: "Italy",
    location: "Europe",
    image: "https://delivery.gfobcontent.com/api/public/content/09695c6a4a1c4bf9b20287ad2905dfe4?v=ee77d0",
    description: "Italy is well-known for its architecture, culture, art, opera, literature, film, and fashion."
  },
  {
    id: 2,
    name: "Varkala",
    location: "Kerala",
    image: "https://oneday.travel/wp-content/uploads/one-day-varkala-sightseeing-tour-package-by-cab-header.jpg",
    description: "Varkala is famous for its beach."
  },
  {
    id: 3,
    name: "Austria",
    location: "Europe",
    image: "https://www.kantoadventures.com/uploads/1/3/2/0/13206244/91tgqbdiktl-sl1500_orig.jpg",
    description: "Austria is known for its stunning serenity."
  },
  {
    id: 4,
    name: "Spiti Valley",
    location: "India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBl2o4h1bVArWAQfT-MyN7V5Qfc6z-B2Sd4A&s",
    description: "Beautiful mountains covered with snow."
  }
];

function App() {
  return (
    <div className="app">
      <header>
        <h1>Destinations</h1>
      </header>

      <div className="destinations-grid">
        {destinations.map(destination => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </div>
  );
}

export default App;