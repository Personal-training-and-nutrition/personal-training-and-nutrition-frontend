import { PlanInputType } from '../components/PlanPageLayot/PlanPageLayot';

type FormDay = {
  spec_comment: string;
};

export function parsePlan({ name, kkal, protein, carbo, fat, describe, diet }: IDietPlan) {
  const weekdays: FormDay[] = [];
  if (diet) {
    for (const ele of diet) {
      if (ele.spec_comment) {
        const index = parseInt(ele.weekday) - 1;
        weekdays[index] = { spec_comment: ele.spec_comment };
      }
    }
  }
  return {
    namePlan: name,
    calories: kkal,
    protein,
    carbohydrates: carbo,
    fats: fat,
    recomendations: describe || '',
    diet: weekdays,
  };
}

export function preparePlan({ namePlan, calories, protein, carbohydrates, fats, recomendations, diet }: PlanInputType) {
  const weekdays: TDietDay[] = [];
  if (diet && diet?.length > 0) {
    for (let i = 0; i < diet.length; i++) {
      if (diet[i]?.spec_comment) weekdays.push({ weekday: String(i + 1), spec_comment: diet[i].spec_comment });
    }
  }
  return {
    name: namePlan,
    kkal: calories,
    protein,
    carbo: carbohydrates,
    fat: fats,
    describe: recomendations,
    diet: weekdays,
  };
}

export function preparePlanTrain({ namePlan, recomendations, training }: PlanInputType) {
  const weekdays: TTrainingDay[] = [];
  if (training && training?.length > 0) {
    for (let i = 0; i < training.length; i++) {
      if (training[i]?.spec_comment) weekdays.push({ weekday: String(i + 1), spec_comment: training[i].spec_comment });
    }
  }
  return {
    name: namePlan,
    describe: recomendations,
    training: weekdays,
  };
}
