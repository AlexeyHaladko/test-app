import styles from "./select-plan.module.css";
import { Plan } from "./Plan";
import { PlanItem, PlanType } from "./types";
import { SubmitBtn } from "./SubmitButton";
import { useState } from "react";

const PLANS: PlanItem[] = [
    { planType: PlanType.agreement, mainText: "Free trial for 7 days", helperText: "No payment now, cancel anytime" },
    { planType: PlanType.yearly, mainText: "Yearly plan", helperText: "12 mo • $59.99" },
    { planType: PlanType.monthly, mainText: "Monthly plan", helperText: "$59.99" },
];

export const SelectPlanForm = () => {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>(PlanType.yearly);
    const onPlanSelected = (planType: PlanType) => {
        if (planType !== PlanType.agreement) {
            setSelectedPlan(planType);
        }
    }

    return (
        <section className={styles.planSection}>
            {PLANS.map((p) => (
                <Plan key={p.planType} {...p} selected={selectedPlan === p.planType} onSelect={onPlanSelected}/>
            ))}
            <SubmitBtn/>
        </section>
    )
}