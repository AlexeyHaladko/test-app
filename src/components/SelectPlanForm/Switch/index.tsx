import styles from "./switch.module.css";
import React, { useState } from "react";

export const Switch = ({ onCheck }: {onCheck: (checked: boolean) => void }) => {
    const [value, setValue] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Boolean(e.target.checked));
        onCheck(e.target.checked);
    }

    return (
        <>
            <label className={styles.switch}>
                <input type="checkbox" onChange={(e) => onChange(e)} checked={value} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </>
    )
}