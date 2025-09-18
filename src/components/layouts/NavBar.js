import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';

const url = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png";

function NavBar() {
    return(
            <div className={styles.Navbar}>
              <div className={styles.centerContent}>
                <Link to="/"><img src={url} alt="Logo" /></Link>
                <Link to="/"><p>YouContent</p></Link>
              </div>
            </div>
    );
}
export default NavBar;