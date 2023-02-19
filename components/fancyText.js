import styles from './fancyText.module.css'

export default function FancyText({ children }) {
    return (
        <span className={styles.fancyText}>
            {children}
        </span>
    )
}