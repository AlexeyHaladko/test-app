export enum PlanType {
    yearly = "yearly",
    monthly = "monthly",
}

export type PlanItem = {
    planType: PlanType;
    pricePerYear: string | null;
    pricePerMonth: string;
    mainText: string;
};