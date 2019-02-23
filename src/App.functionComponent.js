import React from 'react';

/* only state */

// const App = () => {
//   const [value, setValue] = React.useState('');

//   const onChange = event => setValue(event.target.value);

//   return (
//     <div>
//       <h1>Hello React Function Component!</h1>

//       <input value={value} type="text" onChange={onChange} />

//       <p>{value}</p>
//     </div>
//   );
// };

/* state + side effect with local storage */

// const App = () => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem('myValueInLocalStorage') || '',
//   );

//   React.useEffect(() => {
//     localStorage.setItem('myValueInLocalStorage', value);
//   }, [value]);

//   const onChange = event => setValue(event.target.value);

//   return (
//     <div>
//       <h1>Hello React Function Component!</h1>

//       <input value={value} type="text" onChange={onChange} />

//       <p>{value}</p>
//     </div>
//   );
// };

/* state + side effect with local storage + custom hook */

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || '',
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const App = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage',
  );

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React Function Component!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default App;
