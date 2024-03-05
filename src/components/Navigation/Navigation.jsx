import styles from './Navigation.module.css';

const Navigation = () => {
  return (
   <nav className={`${styles.navigation} container`}>
    <div className="logo">
        <img src="/images/Frame 2 1.png" alt="all about coding" />
    </div>
    <ul>
        <li>HOME</li> 
        <li>ABOUT</li> 
        <li>CONTACT</li> 
    </ul>
   </nav>
  )
}

export default Navigation;