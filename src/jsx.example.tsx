import { createElement as e, useState } from "react";


function App() {
  
  const [counter, setCounter] = useState(0)
  
  return e('section', {className: 'container mx-auto max-w-2xl text-2xl'}, [
    e('h1', {key: 0, className: 'font-bold'}, 'Test JSX'),
    e('button', {
        key: 1,
        className: 'border px-4 py-2 my-2 bg-slate-200 hover:bg-slate-300', 
        onClick: () => setCounter(prev => prev + 1)
      }, 
      'click me'
    ),
    e('div', {key: 2, className: 'fotn-bold'}, [
      'counter: ',
      e('span', {key: 3, className:'text-red-400'}, counter)
    ])
  ])
}

export default App;
