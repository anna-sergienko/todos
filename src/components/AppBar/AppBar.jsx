import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

export const AppBar = () => {
  return (
    <header>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
