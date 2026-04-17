import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { KeeperContext } from './KeeperContext';
const KeeperContaxtProvider = ({children}) => {

  const [friends,setFriends] = useState([]);
  const [timeline,setTimeline] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  //fetching data from json file
  useEffect(()=>{
    const fetchData =async() =>{
        try {
          setLoading(true);
          const data = await fetch("http://localhost:5173/friends.json");
          const result = await data.json();
          setFriends(result);
        } catch (error) {
          console.error("Error fetching friends:", error);
        } finally {
          setLoading(false);
        }
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
      
      // Toast notification based on action type
      const actionMessages = {
        text: `Texted ${friendToBeAdded.name}!`,
        call: `Called ${friendToBeAdded.name}!`,
        video: `Video called ${friendToBeAdded.name}!`,
      };
      
      toast.success(actionMessages[actionType] || "Action recorded!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  //handle delete timeline entry
  const handleDeleteTimelineEntry = (entryId) => {
    setTimeline(prevTimeline => prevTimeline.filter(entry => entry.id !== entryId));
    
    // Toast notification for deletion
    toast.info("Timeline entry removed", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  //filter timeline based on action type
  const fillterdTimeline = filterType === "all" ? timeline : timeline.filter(entry => entry.action === filterType);

  //search timeline by friend name or action type
  const searchTimeline = (entries) => {
    if (!searchQuery.trim()) return entries;
    
    const query = searchQuery.toLowerCase();
    return entries.filter(entry => 
      entry.friendName.toLowerCase().includes(query) || 
      entry.action.toLowerCase().includes(query)
    );
  };

  //sort timeline entries by date
  const sortTimeline = (entries) => {
    const sorted = [...entries];
    if (sortOrder === "newest") {
      sorted.sort((a, b) => b.id - a.id); // Newest first
    } else {
      sorted.sort((a, b) => a.id - b.id); // Oldest first
    }
    return sorted;
  };

  //process timeline: filter -> search -> sort
  const processedTimeline = sortTimeline(searchTimeline(fillterdTimeline));

  //chart data
  const chartData = [
  {
    name: "Text",
    value: timeline.filter(item => item.action === "text").length,
  },
  {
    name: "Call",
    value: timeline.filter(item => item.action === "call").length,
  },
  {
    name: "Video",
    value: timeline.filter(item => item.action === "video").length,
  },
];

  //Data to be provided in context
  const keeperData = {
    friends,
    loading,
    stats,
    friendsDetails,
    handleAction,
    handleDeleteTimelineEntry,
    setFilterType,
    fillterdTimeline,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    processedTimeline,
    chartData,
  };
  return (
    <KeeperContext.Provider value={keeperData}>
        {children}
    </KeeperContext.Provider>
  );
};

export default KeeperContaxtProvider;