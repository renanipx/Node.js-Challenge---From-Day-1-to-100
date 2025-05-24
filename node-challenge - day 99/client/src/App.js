import { gql, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

function App() {
  const { data, loading } = useQuery(GET_TODOS);
  const [text, setText] = useState('');
  const [addTodo] = useMutation(ADD_TODO, {
    optimisticResponse: {
      addTodo: {
        id: Math.random().toString(),
        text,
        completed: false,
        __typename: 'Todo',
      },
    },
    update: (cache, { data: { addTodo } }) => {
      const existing = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos: [...existing.todos, addTodo],
        },
      });
    },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todos</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { text } });
          setText('');
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {data.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.completed ? '✅' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
