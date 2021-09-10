
import { createGlobalState } from 'react-hooks-global-state';
const initialState = { day: 0 };
export const { useGlobalState } = createGlobalState(initialState);
