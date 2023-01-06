import Link from "next/link";
import styles from "../../styles/logo.module.scss"
const Logo = () => <Link href='/'>
    <img src="/images/wp54_white.svg" width="75" height="75" alt="logo" className={styles.logo}/>
</Link>

export default Logo;