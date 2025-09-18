import { useLocation } from 'react-router-dom';
import styles from '../styles/VideoSelecionado.module.css';

function VideoSelecionado() {
  const location = useLocation();
  const { video } = location.state || {};

  if (!video) {
    return <p>Vídeo não encontrado</p>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.VideoPlayer}>
        <img src={video.img} alt={video.titulo} />
        <h1>{video.titulo}</h1>
        <p>{video.views} • {video.data}</p>
        <p>Canal: {video.canal}</p>
      </div>
    </div>
  );
}

export default VideoSelecionado;
