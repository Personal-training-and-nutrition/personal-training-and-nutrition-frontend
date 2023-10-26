export interface IDietPlan {
  id?: number;
  specialist: number;
  user: string;
  name?: string;
  kkal?: number;
  protein?: number;
  carbo?: number;
  fat?: number;
  describe?: string | null;
  diet?: Array<TDietDay>;
}

export type TDietDay = {
  id?: number;
  weekday: string;
  spec_comment?: string | null;
  user_comment?: string | null;
};
