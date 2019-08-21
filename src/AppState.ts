import { Atom } from "@dbeining/react-atom";

interface State {
  currentUser: any;
}

export const AppState: Atom<State> = Atom.of({ currentUser: 'faf' });
