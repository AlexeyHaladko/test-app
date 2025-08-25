import { PlanItem, PlanType } from "./components/SelectPlanForm/types.ts";

const PLANS: PlanItem[] = [
    { planType: PlanType.yearly, mainText: "Yearly plan", helperText: "12 mo • $59.99" },
    { planType: PlanType.monthly, mainText: "Monthly plan", helperText: "$59.99" },
];

export const enum InputQueryParamams {
    yearlyPrice = "yearly_price",
    yearlyMonthPrice = "yearly_price_per_month",
    monthlyPrice = "monthly_price",
}

export const enum OutputQueryParams {
    selectedPlan = "selected_plan",
    isTrial = "is_trial",
}