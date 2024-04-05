import React from 'react';
import { Link } from 'react-router-dom';

const ListaPersonagens = ({ personagens }) => {
  if (personagens.length === 0) {
    return <p>Nenhum personagem encontrado!</p>;
  }

  return (
    <ul>
      {personagens.map((item, index) => (
        <li key={index}>
          <Link to={`/Personagem/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
          <p>{item.name}</p>
          <p>{item.status}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListaPersonagens;
