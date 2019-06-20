import {useState, useEffect} from 'react';

function updateTodos(todos, onUpdate, onError) {
  if (todos === undefined || todos === null) {
    throw Error('Did not expect an empty todos update');
  }
  onUpdate(todos);
  fetch(`/api/todos`, {
    method: 'POST',
    body: JSON.stringify(todos),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
      }
    })
    .catch(error => {
      console.error('Error occured in updating todos json', error);
      onError(error);
    });
}

export default function useTodos() {
  const [todosState, setTodosState] = useState(null);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    if (todosState === null && errorState === null) {
      fetch('/api/todos')
        .then(async todosResponse => {
          if (todosResponse.ok) {
            const {todos} = await todosResponse.json();
            setTodosState(todos);
          } else {
            throw Error(`${todosResponse.status}: ${todosResponse.statusText}`);
          }
        })
        .catch(error => {
          console.error('Error occured in getting todos json', error);
          setErrorState(error);
        });
    }
  });

  return [
    todosState,
    todos => updateTodos(todos, setTodosState, setErrorState)
  ];
}
