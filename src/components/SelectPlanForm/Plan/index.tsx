import styles from "./plan.module.css"
import { PlanItem, PlanType } from "../types";
import { useCallback } from "react";

export const Plan = ({ planType, mainText, pricePerYear, pricePerMonth, selected = false, onSelect }: {
    planType: PlanType;
    mainText: PlanItem["mainText"];
    pricePerYear?: PlanItem["pricePerYear"];
    pricePerMonth: PlanItem["pricePerMonth"];
    selected?: boolean;
    onSelect: (planType: PlanType) => void;
}) => {
    const handlePointerUp = useCallback(() => {
        onSelect(planType);
    }, [onSelect, planType]);

    return (
        <button
            type="button"
            onPointerUp={handlePointerUp}
            aria-pressed={selected}
            className={`${styles.planWrapper} ${selected ? styles.selected : ""}`}
        >

            <div>
                <p className={styles.mainText}>{mainText}</p>
                {planType === PlanType.yearly && <span className={styles.helperText}>{pricePerYear}</span>}
            </div>
            <span>{pricePerMonth} / mo</span>
            { planType === PlanType.yearly && <div className={styles.discountWrapper}><span className={styles.discount}>Save 75%</span></div>}
        </button>
    )
}