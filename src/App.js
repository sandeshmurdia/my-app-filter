import React, { useState } from 'react';

import './App.css';

const list = [
  { id: 1, name: 'Andy', place: 'pune', age: 32 ,data:{ arguements: 'sandesh'}},
  { id: 2, name: 'Bob',place: 'mumbai', age: 30 ,data:{ arguements: 'vishal'}},
  { id: 3, name: 'Tom Hulk', place: 'jaipur',age: 40 },
  { id: 4, name: 'Tom Hank',place: 'sss', age: 50 },
  { id: 5, name: 'Audra',place: 'abc', age: 30 },
  { id: 6, name: 'Anna',place: 'efg', age: 68 },
  { id: 7, name: 'Tom',place: 'hij', age: 34 },
  { id: 8, name: 'Tom Riddle', place: 'klm',age: 28 },
  { id: 9, name: 'Bolo',place: 'nop', age: 23 },


];

function App() {
  const [name, setName] = useState('');

  const [foundUsers, setFoundUsers] = useState(list);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = list.filter((user) => {
        return user.data?.arguements?.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(list);
    }

    setName(keyword);
  };
  console.log(list);

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-place">{user.place}</span>

              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;