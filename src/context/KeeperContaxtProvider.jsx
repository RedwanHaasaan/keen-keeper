import { useEffect, useState } from 'react';
import { KeeperContext } from './KeeperContext';
const KeeperContaxtProvider = ({children}) => {

  const [friends,setFriends] = useState([]);

  //fetching data from json file
  useEffect(()=>{
    const fetchData =async() =>{
        const data = await fetch("http://localhost:5173/friends.json");
        const result = await data.json();
        setFriends(result)
    };
    fetchData();
  },[])

  //stats
      const stats = {
        totalFriends: friends.length,
        onTrack: friends.filter(friend => friend.status === "on-track").length,
        needAttention: friends.filter(friend => friend.status === "overdue").length,
        interactionsThisMonth: 12,    
    }

  console.log(friends);
    const keeperData = {friends,stats};
  return (
    <KeeperContext.Provider value={keeperData}>
        {children}
    </KeeperContext.Provider>
  );
};

export default KeeperContaxtProvider;