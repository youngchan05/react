import React, {useState,useRef} from 'react';
// import Counter from './Counter';
import InputSample from './Inputsample';
import UserList from './UserList';
import CreateUser from './CreateUser';
function App() {
  const [inputs ,setInputs] = useState({
    username:'',
    email:'',
  });
  const {username , email} = inputs;
  const onChange =  e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value,
    });
  };
  const [users,setUsers] = useState([
    {
        id:0,
        usernmae:'김영찬',
        email:"dsadsad@naver.com",
    },
    {
        id:1,
        usernmae:'김영찬1',
        email:"dsadsad@naver.com",
    }
]);
const nextId = useRef(4);
const onCreate = () => {
  const user = {
    id:nextId.current,
    username,
    email,
  };
  setUsers([...users,user]);
  setInputs({
    username:'',
    email:'',
  })
  nextId.current += 1;
}
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
