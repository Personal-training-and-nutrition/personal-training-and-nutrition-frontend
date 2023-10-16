interface IDietPlan {
  id?: number;
  specialist: number;
  user: number;
  name?: string;
  kkal?: number;
  protein?: number;
  carbo?: number;
  fat?: number;
  describe?: string | null;
  diet?: Array<TDietDay>;
}

type TDietDay = {
  id?: number;
  weekday: string;
  spec_comment?: string | null;
  user_comment?: string | null;
};
