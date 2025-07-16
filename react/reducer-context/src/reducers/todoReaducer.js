


function todoReducer(state, action) {
    switch (action.type) {
        case 'Add_Todo':
            return [...state,{
                id: Date.now(),
                text: action.text,
                done: false,
            }];
        case 'Toggle_Todo':
            return state.map(todo => 
                todo.id === action.id?{
                    ...todo, done:!todo.done
                }:todo)
        case 'Remove_Todo':
            return state.filter(todo => todo.id !== action.id)

        default:
            return state;
    }
}

export default todoReducer;