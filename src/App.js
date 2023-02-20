import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [id, setId] = useState('');
  const [results, setResults] = useState();

            //  useEffect(() => {
            //    document.id = id;
            //  }, [id]);
      
        // useEffect(() => {
        //   if (isFinite(id) && id <= 200) {
        //     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        //       .then(stream => stream.json())
        //       .then(results => setResults(results));
        //   }
        // }, [id]);

        // let title = '';
        // let userId = '';
        // if (results) {
        //   title = results.title;
        //   userId = results.userId;
        // }

  useEffect(() => {
    const handle = setTimeout(() => {
      if (isFinite(id) && id > 0 && id <= 200 && !id.includes('.')) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(stream => stream.json())
        .then(results => setResults(results));
      }
    }, 1000);   // request will be sent 1 second after printing

    return () => {
      clearTimeout(handle);
    };
  }, [id]);     // if we want to run "fetch" only once, 
                // we need to pass an empty array [] to "useEffect"

  let title = '';
  let userId = '';
  if (results) {
    title = results.title;
    userId = results.userId;
  }

  return (
    <div className="App">
            {/* {id} */}
      <input 
        type='text'
        placeholder='number between 1 and 200'
        value={id}
        onChange={(evt) => setId(evt.target.value)} 
      />

      <h3>userId: {userId}</h3>
      <h3>id: {id}</h3>
      <h3>title: {title}</h3>
    </div>
  );
}

export default App;
