import React, { useReducer } from 'react'

type CounterState={
    count: number
}

type UpdateAction={
    type: 'increament' | 'decrement',
    payload: number
}

type ResetAction={
    type: 'reset',
}

type CounterAction= UpdateAction | ResetAction

const initialState = {count:0};

function reducer(state: CounterState, action:CounterAction){
    switch(action.type){
        case 'increament':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

        <button onClick={()=>dispatch({type:'increament', payload:10})}>Increament 10</button>
        <button onClick={()=>dispatch({type:'decrement', payload:5})}>Decreament 5</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

       count: { state.count}
      
    </div>
  )
}
