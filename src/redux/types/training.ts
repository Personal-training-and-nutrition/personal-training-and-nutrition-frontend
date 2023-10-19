interface ITrainingPlan {
  id?: number;
  specialist: number;
  user: number;
  name?: string;
  describe?: string | null;
  diet?: Array<TTrainingDay>;
  }

type TTrainingDay = {
  id?: number;
  weekday: string;
  spec_comment?: string | null;
  user_comment?: string | null;
};