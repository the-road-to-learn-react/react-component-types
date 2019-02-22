import React from 'react';

/* only state */

// const App = () => {
//   const [value, setValue] = React.useState('');

//   const onChange = event => setValue(event.target.value);

//   return (
//     <div>
//       <h1>Hello React ES6 Class Component!</h1>

//       <input value={value} type="text" onChange={onChange} />

//       <p>{value}</p>
//     </div>
//   );
// };

/* state + side effect with local storage */

// const App = () => {
//   const [value, setValue] = React.useState('');

//   React.useEffect(() => {
//     setValue(localStorage.getItem('myValueInLocalStorage') || '');
//   }, []);

//   React.useEffect(() => {
//     localStorage.setItem('myValueInLocalStorage', value);
//   }, [value]);

//   const onChange = event => setValue(event.target.value);

//   return (
//     <div>
//       <h1>Hello React ES6 Class Component!</h1>

//       <input value={value} type="text" onChange={onChange} />

//       <p>{value}</p>
//     </div>
//   );
// };

/* state + side effect with local storage + custom hook */

const useLocalStorage = (localStorageKey, value, setValue) => {
  React.useEffect(() => {
    setValue(localStorage.getItem(localStorageKey) || '');
  }, []);

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
};

const App = () => {
  const [value, setValue] = React.useState('');

  useLocalStorage('myValueInLocalStorage', value, setValue);

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React ES6 Class Component!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default App;
