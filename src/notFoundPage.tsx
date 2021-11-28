import React from 'react';
import { useNavigate } from 'react-router';
import './styles/notFound.css';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="notFoundContainer">
      <h1>Página não encontrada</h1>
      <p>
        Mas não tem problema, clique{' '}
        <span onClick={() => navigate('/')}>aqui</span> para ser redirecionado
      </p>
    </div>
  );
}
