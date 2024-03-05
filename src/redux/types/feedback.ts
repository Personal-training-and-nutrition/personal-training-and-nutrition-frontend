export type SortType = {
  name: string;
  // sortProperty: SortPropertyEnum;
};
export interface IFeedbackSliceState {
  isOpen: boolean;
  sort: SortType;
}
