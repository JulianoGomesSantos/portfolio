import React, { useEffect, useState } from 'react';
import './gallery.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router';
import {
  AiOutlinePlusCircle,
  AiOutlineClose,
  AiOutlineTool,
} from 'react-icons/ai';
import { CarouselComponent } from '../carousel';

import api from '../../services/api';

export function Gallery() {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [data, setData] = useState([
    {
      image: 'https://i.imgur.com/jmYUXhy.jpeg',
      caption: 'San Francisco',
    },
  ]);

  useEffect(() => {
    api.get('/api').then((response) => {
      setData(response.data.image);
    });
  }, []);

  function handleInsert() {
    api.post('/api', {
      image: url,
      caption: name,
    });
  }

  handleInsert();

  if (clicked) {
    return (
      <Modal
        isOpen={clicked}
        style={{
          overlay: { background: '#000000e5' },
          content: {
            background: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <div className="GalleryModalContainer">
          <form>
            <input
              type="text"
              required
              placeholder="URL da imagem"
              onChange={(event) => setUrl(event.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Nome da imagem"
              onChange={(event) => setName(event.target.value)}
            />
            <input type="submit" value="SALVAR" />
          </form>
          <div
            className="Preview"
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
          <a className="CloseButton" onClick={() => setClicked(false)}>
            <AiOutlineClose size={32} />
          </a>
        </div>
      </Modal>
    );
  }
  return (
    <div className="GalleryContainer">
      <div style={{ textAlign: 'center' }}>
        <h2>Galeria</h2>
        <div>
          <AiOutlinePlusCircle
            onClick={() => setClicked(true)}
            size={32}
            id="addImageIcon"
          />

          <AiOutlineTool
            onClick={() => navigate('/gallery')}
            size={32}
            id="addImageIcon"
          />
        </div>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <CarouselComponent data={data} />
        </div>
      </div>
    </div>
  );
}
