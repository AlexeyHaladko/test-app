import { useSearchParams } from "react-router-dom";
import { PlanItem, PlanType } from "../components";
import { InputQueryParamams } from "../constants";

export const useCreatePlanFromQuery: PlanItem[] = () => {
    const [searchParams] = useSearchParams();

    return [
        { planType: PlanType.yearly, mainText: "Yearly plan", pricePerYear: `12 mo • ${searchParams.get(InputQueryParamams.yearlyPrice)}`, pricePerMonth:`${searchParams.get(InputQueryParamams.yearlyMonthPrice)}` },
        { planType: PlanType.monthly, mainText: "Monthly plan", pricePerMonth: `${searchParams.get(InputQueryParamams.monthlyPrice)}` },
    ];
}

//http://127.0.0.1:5173/test-app/?yearPrice=$1243&monthPrice=$1243&monthPlanPricePerYear=$12344