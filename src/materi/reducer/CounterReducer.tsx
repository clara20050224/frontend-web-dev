export type CounterState = {
    count: number;
};

type CounterAction =
    | { type: 'increment', payload?: number }
    | { type: 'decrement', payload?: number }
    | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + (action.payload || 1) };
        case 'decrement':
            return { count: state.count - (action.payload || 1) };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

export default counterReducer;