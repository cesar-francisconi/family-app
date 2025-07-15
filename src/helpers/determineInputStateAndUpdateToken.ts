import { InputProps } from '@/src/components/Input/types';
import { getInputToken } from './getInputToken';

type StateType = InputProps['state'];

const state: Record<StateType, StateType> = {
    focus: 'focus',
    default: 'default',
    error: 'error',
    disabled: 'disabled',
    filled: 'filled',
    validated: 'validated',
};

interface DetermineInputStateParams {
    isFocused: boolean;
    isDirty: boolean;
    invalid: boolean;
    isValidating: boolean;
    isValidatingRef: React.MutableRefObject<boolean>;
    props: InputProps;
}

export const determineInputStateAndUpdateToken = ({
    isFocused,
    isDirty,
    invalid,
    isValidating,
    isValidatingRef,
    props,
}: DetermineInputStateParams) => {
    if (isValidating) {
        isValidatingRef.current = true;
    }

    let currentState: StateType = state.default;

    if (invalid && isValidatingRef.current) {
        currentState = state.error;
    } else if (!invalid && isValidatingRef.current) {
        currentState = state.validated;
    } else if (isFocused) {
        currentState = state.focus;
    } else if (!isFocused && isDirty && !invalid) {
        currentState = state.filled;
    }

    return getInputToken({ ...props, state: currentState });
};
