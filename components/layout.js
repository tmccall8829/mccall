import styles from './layout.module.css'
// import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            {children}
            {/* <Footer /> */}
        </div>
    )
}
