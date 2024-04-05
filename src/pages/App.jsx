import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pesquisa from '../components/searchBar/index.jsx'
import SelectStatus from '../components/selectStatus/index.jsx';
import ListaPersonagens from '../components/listCharacter/index.jsx';
import './index.css';
import './App.css';

const App = () => {
  useEffect(() => {
    buscarPersonagens();
  }, []);

  const [personagens, setPersonagens] = useState([]);
  const [status, setStatus] = useState('Alive');

  const buscarPersonagens = async () => {
    try {
      console.log('Sucesso buscar personagens');
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setPersonagens(response.data.results);
    } catch (erro) {
      console.log(erro);
    }
  };

  const buscarPersonagem = async (nome) => {
    try {
      console.log(status);
      console.log('Sucesso buscar personagem');
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nome}&status=${status}`);
      
      console.log(response.data.results);
      setPersonagens(response.data.results);
    } catch (erro) {
      console.log('Erro');
      if (erro.message === 'Request failed with status code 404') {
        setPersonagens([]);
      }
    }
  };

  return (
    <div>
      <h1>Lista de Personagens</h1>
      <Pesquisa onSearch={buscarPersonagem} />
      <SelectStatus onChange={(evento) => setStatus(evento.target.value)} />
      <ListaPersonagens personagens={personagens} />
    </div>
  );
}

export default App;
