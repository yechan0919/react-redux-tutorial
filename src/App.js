import React from 'react';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

const App = () => {
    return (
        <>
            <CounterContainer/>
            <hr/>
            <TodosContainer/>
        </>
    );
};

export default App;