//DO NOT CALL API FROM CLIENT SIDE LIKE DONE HERE

const API_KEY = '5f1b1c97df2c403c9bc132731242506';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
      const queryString = `&q=${city}`;
      const res = await fetch(BASE_URL + queryString);
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };



  export { show };
