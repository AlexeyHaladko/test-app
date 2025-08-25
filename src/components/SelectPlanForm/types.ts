export enum PlanType {
    yearly = "yearly",
    monthly = "monthly",
}

export type PlanItem = {
    planType: PlanType;
    pricePerYear?: string;
    pricePerMonth: string;
    mainText: string;
};