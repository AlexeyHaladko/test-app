import styles from "./submit-btn.module.css";

export const SubmitBtn = ({ onClick }: {onClick: () => void}) => {
    return (
        <button onClick={onClick} className={styles.btn}>Join Now</button>
    )
}