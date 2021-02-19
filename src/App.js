import './App.css';
import FriendList from './components/FrendList/FriendList';
import friends from './components/FrendList/friends.json';
console.log(friends);
function App() {
  return (
    <div className="App">
      <h1>Goit-react-hw-01-components</h1>
      <FriendList
        avatar={friends[0].avatar}
        isOnline={friends[0].isOnline}
        name={friends[0].name}
      />
    </div>
  );
}

export default App;
