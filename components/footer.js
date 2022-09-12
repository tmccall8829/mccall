import styles from './footer.module.css'

export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <a href='/'>Home 🏠</a>
                <a href='/playground'>Playground 🎡</a>
            </footer>
        </div>
    )
}