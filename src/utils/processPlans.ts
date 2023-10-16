export function parsePlan(plan: IDietPlan) {
  if (plan.diet) {
    const weekdays: Record<number, TDietDay> = {};
    for (const ele of plan.diet) {
      const index = parseInt(ele.weekday) - 1;
      weekdays[index] = ele;
    }
  }
}
