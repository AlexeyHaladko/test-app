import styles from "./plan.module.css"
import { Switch } from "../Switch";
import { PlanItem, PlanType } from "../types";

export const Plan = ({ planType = PlanType.agreement, mainText, helperText, selected = false, onSelect }: {
    planType: PlanType;
    mainText: PlanItem["mainText"];
    helperText: PlanItem["helperText"];
    selected?: boolean;
    onSelect: (planType: PlanType) => void;
}) => {
    return (
        <div onClick={
            () => onSelect(planType as PlanType)}
             className={`${styles.planWrapper} ${planType === PlanType.agreement ? "" : styles.withBorder} ${selected ? styles.selected : ""}`}
        >
            <div>
                <p className={styles.mainText}>{mainText}</p>
                <span className={styles.helperText}>{helperText}</span>
            </div>
            { planType === PlanType.agreement ? <Switch/> : <span>$4.99 / mo</span> }
            { planType === PlanType.yearly && <div className={styles.discountWrapper}><span className={styles.discount}>Save 75%</span></div>}
        </div>
    )
}