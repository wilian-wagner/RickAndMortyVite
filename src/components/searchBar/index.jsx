import React, { useState } from 'react';

const Pesquisa = ({ onSearch }) => {
  const [nomePersonagem, setNomePersonagem] = useState('');

  const handleInputChange = (evento) => {
    setNomePersonagem(evento.target.value);
  };

  const handleSearchClick = () => {
    onSearch(nomePersonagem);
  };

  return (
    <div>
      <input
        type="text"
        value={nomePersonagem}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Pesquisar</button>
    </div>
  );
};

export default Pesquisa;
