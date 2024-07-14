export interface Item {
  id: number;
  name: string;
}

export interface State {
  items: Item[];
}

export const initialState: State = {
  items: [],
};
