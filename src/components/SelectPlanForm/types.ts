export enum PlanType {
    yearly = "yearly",
    monthly = "monthly",
    agreement = "agreement",
}

export type PlanItem = {
    planType: PlanType;
    mainText: string;
    helperText: string;
};