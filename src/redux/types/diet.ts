interface IDietPlan {
  specialist: number;
  user: number;
  name?: string;
  kkal?: number;
  protein?: number;
  carbo?: number;
  fat?: number;
  describe?: string | null;
  diet?: {
    weekday: string;
    spec_comment?: string | null;
    user_comment?: string | null;
  }[];
}