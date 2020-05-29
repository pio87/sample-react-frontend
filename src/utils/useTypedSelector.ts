import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { ApplicationState } from '../store/rootReducer';

const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default useTypedSelector;
