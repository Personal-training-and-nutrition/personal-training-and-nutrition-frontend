export interface ITrainingPlan {
  id?: string | null;
  specialist: string | null;
  user: string;
  name?: string;
  describe?: string | null;
  training?: Array<TTrainingDay>;
  }

export type TTrainingDay = {
  id?: string;
  weekday: string;
  spec_comment?: string | null;
  user_comment?: string | null;
};