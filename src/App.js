import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statData from './components/Statistics/statistical-data.json';
import FriendList from './components/FrendList/FriendList';
import friends from './components/FrendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

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
      <FriendList friends={friends} />
      <h2 className="title">Task 4 - TransactionHistory</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
