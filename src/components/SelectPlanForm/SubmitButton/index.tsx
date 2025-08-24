import styles from "./submit-btn.module.css";

export const SubmitBtn = () => {
    return (
        <button onClick={() => console.log("123")} className={styles.btn}>Join Now</button>
    )
}