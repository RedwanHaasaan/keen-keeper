import { useEffect, useState } from 'react';
import { KeeperContext } from './KeeperContext';
const KeeperContaxtProvider = ({children}) => {

  const [friends,setFriends] = useState([]);
  const [timeline,setTimeline] = useState([]);
  const [filterType, setFilterType] = useState("all");

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
  //Friends data
  const friendsDetails =(friendId) => {
    return friends.find(friend => friend.id === friendId);
  }

  //Action handler
  const handleAction = (friendId, actionType)=>{
    const friendToBeAdded = friends.find(friend => friend.id === friendId);
    if(friendToBeAdded){
      const newTimelineEntry = {
        id: Date.now(),
        action: actionType,
        friendName: friendToBeAdded.name,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
      }),
      };
      setTimeline(prevTimeline => [...prevTimeline, newTimelineEntry]);
    }
  }

  //handle delete timeline entry
  const handleDeleteTimelineEntry = (entryId) => {
    setTimeline(prevTimeline => prevTimeline.filter(entry => entry.id !== entryId));
  }

  //filter timeline based on action type
  const fillterdTimeline = filterType === "all" ? timeline : timeline.filter(entry => entry.action === filterType);

  //Data to be provided in context
  const keeperData = {
    friends,
    stats,
    friendsDetails,
    handleAction,
    handleDeleteTimelineEntry,
    setFilterType,
    fillterdTimeline,
  };
  return (
    <KeeperContext.Provider value={keeperData}>
        {children}
    </KeeperContext.Provider>
  );
};

export default KeeperContaxtProvider;