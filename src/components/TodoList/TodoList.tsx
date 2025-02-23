import React from 'react';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
}

export const TodoList: React.FC<Props> = ({
  todos,
  setSelectedTodo,
  selectedTodo,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => {
          const currentTodo = selectedTodo?.id === todo.id;

          return (
            <tr
              data-cy="todo"
              className={
                currentTodo ? 'has-background-info-light' : ''
              }
            >
              <td className="is-vcentered">
                {todo.id}
              </td>

              {todo.completed ? (
                <td className="is-vcentered">
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                </td>
              ) : (
                <td className="is-vcentered" />
              )}

              <td className="is-vcentered is-expanded">
                <p className={`has-text-${!todo.completed ? 'danger' : 'success'}`}>
                  {todo.title}
                </p>
              </td>

              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => setSelectedTodo(todo)}
                >
                  <span className="icon">
                    <i className={
                      `far fa-eye${currentTodo ? '-slash' : ''}`
                    }
                    />
                  </span>
                </button>
              </td>
            </tr>
          );
        })}

      </tbody>
    </table>
  );
};
