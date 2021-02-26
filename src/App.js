import './App.css';

import user from './dbJsons/user.json';
import statData from './dbJsons/statistical-data.json';
import friends from './dbJsons/friends.json';
import transactions from './dbJsons/transactions.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FrendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <h1 className="title">Goit-react-hw-01-components</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <h2 className="title">Task 3 - Friendlist</h2>
      <FriendList friends={friends} />
      <h2 className="title">Task 4 - TransactionHistory</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
