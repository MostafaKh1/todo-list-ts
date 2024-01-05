import { setFilter } from '../store/todoSlice';
import { UseAppDispatch, UseAppSelector } from './../store/index';

function FilterTodo() {
  const dispatch = UseAppDispatch();
  const activeFilter = UseAppSelector((state) => state.todo.filter);

  const handleFilter = (filter: 'all' | 'pending' | 'completed') => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <div className="flex gap-4">
        <button
          onClick={() => handleFilter('all')}
          className={`text-blue-400 ${activeFilter === 'all' ? 'font-bold' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter('pending')}
          className={`text-blue-400 ${activeFilter === 'pending' ? 'font-bold' : ''}`}
        >
          Pending
        </button>
        <button
          onClick={() => handleFilter('completed')}
          className={`text-blue-400 ${activeFilter === 'completed' ? 'font-bold' : ''}`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default FilterTodo;
