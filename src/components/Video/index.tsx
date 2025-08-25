import styles from "./video.module.css";
import { useNavigate } from "react-router-dom";

export const Video = () => {
    const navigate = useNavigate();

    const onSkipHandler = () => {
        navigate("/skip");
    }

    return (
        <section className={styles.videoWrapper}>
           <button className={styles.skip} onClick={onSkipHandler}>Skip</button>
           <div className={styles.img}></div>
        </section>
    )
}