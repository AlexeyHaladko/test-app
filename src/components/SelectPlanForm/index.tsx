import styles from "./select-plan.module.css";
import { Plan } from "./Plan";
import { PlanItem, PlanType } from "./types";
import { SubmitBtn } from "./SubmitButton";
import { useCallback, useState } from "react";
import { TrialToggle } from "./TrialToggle";
import { useNavigate } from 'react-router-dom';
import { useCreatePlanFromQuery } from "../../utils/useCreatePlanFromQuery";
import { OutputQueryParams } from "../../constants";

export const SelectPlanForm = () => {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>(PlanType.yearly);
    const [isTrial, setIsTrial] = useState<boolean>(false);

    const plans: PlanItem[] = useCreatePlanFromQuery();
    const onPlanSelected = (planType: PlanType) => {
      setSelectedPlan(planType);
    }

    const onCheckTrialToggle = useCallback((checked: boolean) => {
        setIsTrial(checked);
    }, []);

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate(`/submit?${OutputQueryParams.selectedPlan}=${selectedPlan}&${OutputQueryParams.isTrial}=${isTrial}`);
    }
    return (
        <section className={styles.planSection}>
            <TrialToggle onToggle={onCheckTrialToggle} isTrialSelected={isTrial}/>
            {plans.map((plan) => (
                <Plan key={plan.planType} {...plan} selected={selectedPlan === plan.planType} onSelect={onPlanSelected}/>
            ))}
            <SubmitBtn onClick={onSubmit}/>
        </section>
    )
}
//http://127.0.0.1:5173/test-app/?yearly_price=$1243&yearly_price_per_month=$1243&monthly_price=$12344