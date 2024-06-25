import { useState } from 'react';


const WeatherSearch = (props) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    //prevent reload of page
    e.preventDefault();
    
    //uses the prop sent by app.jsx and calls the function fetchData 
props.fetchData(city)
setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;