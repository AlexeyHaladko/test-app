import styles from "../Plan/plan.module.css";
import { Switch } from "../Switch";

export const TrialToggle = ({onToggle, isTrialSelected}: {
    onToggle: (checked: boolean) => void,
    isTrialSelected: boolean
}) => {
    return (
        <div className={`${styles.planWrapper} ${styles.withBorder}`}>
            <div>
                <p className={styles.mainText}>{isTrialSelected ? "Free trial for 72 days": "Not sure yet?"}</p>
                <span className={styles.helperText}>{isTrialSelected ? "No payment now, cancel anytime": "Enable free trial"}</span>
            </div>
            <Switch onCheck={onToggle}/>
        </div>
    )
}