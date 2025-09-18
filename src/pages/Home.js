import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import React, { useState } from 'react';
import '../App.css';

function Home() {
  const txtviews = " de visualizações";

  const [showModal, setShowModal] = useState(false);
  const [videos, setVideos] = useState([
    {
      img: "https://www.devmedia.com.br/arquivos/cursos/react_intro/thumb.png",
      titulo: "Aula de React - Aula 01",
      canal: "Programador Mário",
      views: "1 mi" + txtviews,
      data: "há 1 ano"
    },
    {
      img: "https://www.devmedia.com.br/arquivos/cursos/curso_minha-primeira-single-page-application-com-react-2176.png",
      titulo: "Aula de React - Aula 02",
      canal: "Programador Mário",
      views: "500 mil" + txtviews,
      data: "há 6 meses"
    },
    {
      img: "https://supremaux.com/wp-content/uploads/2024/05/Curso-Gratuito-e-Completo-de-React-Native-Expo.jpg",
      titulo: "Aula de React - Aula 03",
      canal: "Programador Mário",
      views: "300 mil" + txtviews,
      data: "há 3 meses"
    },
    {
      img: "https://kinsta.com/pt/wp-content/uploads/sites/3/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
      titulo: "Aula de React - Aula 04",
      canal: "Programador Mário",
      views: "200 mil" + txtviews,
      data: "há 1 mês"
    }
  ]);

  const [form, setForm] = useState({
    img: '',
    titulo: '',
    canal: '',
    views: '',
    data: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setVideos([
      ...videos,
      {
        ...form,
        views: form.views + txtviews 
      }
    ]);
    setForm({ img: '', titulo: '', canal: '', views: '', data: '' });
    setShowModal(false);
  }

  return (
    <div className="App">
      {/* Botão de criar vídeo */}
      <div className='CreateBtn'>
        <button onClick={() => setShowModal(true)}>
          <p>Postar vídeo</p>
        </button>
      </div>

      {/* Modal para adicionar vídeo */}
      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit} className="modal-form">
            <h2>Adicionar Vídeo</h2>
            <input name="img" type="text" placeholder="URL da imagem" value={form.img} onChange={handleChange} required />
            <input name="titulo" type="text" placeholder="Título" value={form.titulo} onChange={handleChange} required />
            <input name="canal" type="text" placeholder="Canal" value={form.canal} onChange={handleChange} required />
            <input name="views" type="text" placeholder="Visualizações" value={form.views} onChange={handleChange} required />
            <input name="data" type="text" placeholder="Data" value={form.data} onChange={handleChange} required />
            <button type="submit">Adicionar</button>
            <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
          </form>
        </div>
      )}

      {/* Lista de vídeos */}
      <div className='Content'>
        {videos.map((video, idx) => (
          <Link
            key={idx}
            to={`/video/${idx}`}
            state={{ video }} 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <VideoCard
              img={video.img}
              titulo={video.titulo}
              canal={video.canal}
              views={video.views}
              data={video.data}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
