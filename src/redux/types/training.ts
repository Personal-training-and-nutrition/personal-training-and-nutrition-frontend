interface ITrainingPlan {
  specialist: number;
  user: number;
  name?: string;
  describe?: string;
  training?: {
    weekday: string;
    spec_comment?: string | null;
    user_comment?: string | null;
  }[];
}
