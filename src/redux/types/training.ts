export interface ITrainingPlan {
  id?: number | null;
  specialist: number | null;
  user: string;
  name?: string;
  describe?: string | null;
  training?: Array<TTrainingDay>;
  }

export type TTrainingDay = {
  id?: number;
  weekday: string;
  spec_comment?: string | null;
  user_comment?: string | null;
};