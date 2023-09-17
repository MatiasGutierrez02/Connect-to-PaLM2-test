import apiService from '../service/appService'
import { useState } from 'react'
import './App.css'


const makeRequest = async (inputValue) => {
  const response = await apiService.sendRequest(inputValue)
  return response;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await makeRequest(inputValue)
    setResponse(response);
  };
  
  return (
    <>
      <h1>React testing</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Ingrese un valor"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Enviar</button>
        <p>Respuesta: {response}</p>
      </div>
    </>
  );
}

export default App;