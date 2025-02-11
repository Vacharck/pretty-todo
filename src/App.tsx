import './App.css'
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/todo';
import { FilterProvider } from './context/filter';
import { SortProvider } from './context/sort';

function App() {
  return (
    <TodoProvider>
      <div className='flex place-content-evenly h-screen w-screen gap-5'>
        <SortProvider>
          <FilterProvider>
            <Header/>
            <main className='flex flex-col w-2/3'>
              <h2 className='text-4xl font-bold w-full text-center text-neutral-50 bg-sky-400'>
                To-do List
              </h2>
              <TodoList/>
            </main>
          </FilterProvider>  
        </SortProvider>
      </div>
    </TodoProvider>
  )
}

export default App
