import {
  Archive,
  BellRing,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";
import useKeeper from "../../hooks/useKeeperCtx";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendsDetails,handleAction } = useKeeper();
  const friendID = Number(useParams().friendId);
  const friend = friendsDetails(friendID);

  if (!friend) {
    return <div className="p-6 text-center">Loading friend details...</div>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto grid px-2 lg:grid-cols-4 gap-6">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />

            <h2 className="font-semibold text-lg">{friend.name}</h2>

            <div className="mt-2">
              {friend.status === "on-track" && (
                <span className="badge bg-green text-white">On Track</span>
              )}

              {friend.status === "overdue" && (
                <span className="badge bg-red-500 text-white">Overdue</span>
              )}

              {friend.status === "almost due" && (
                <span className="badge bg-yellow-500 text-white">
                  Almost Due
                </span>
              )}
            </div>

          <div className="flex flex-row flex-wrap gap-2 mt-2 items-center justify-center">
            {friend.tags.map((tag, index) => (
              <span key={index} className="badge badge-soft badge-success text-green font-semibold">
                {tag}
              </span>
            ))}
          </div>

            <p className="text-sm text-gray-500 mt-3 italic">
              "{friend.bio}"
            </p>

            <p className="text-xs text-gray-400 mt-1">Email: {friend.email}</p>
          </div>

          {/* Sidebar Actions */}
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-2 cursor-pointer transition hover:bg-gray-100">
            <BellRing className="text-gray-500" size={18} />
            <span className="text-sm">Snooze 2 Weeks</span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-2 cursor-pointer transition hover:bg-gray-100">
            <Archive className="text-gray-500" size={18} />
            <span className="text-sm">Archive</span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-2 text-red-500 cursor-pointer transition hover:bg-gray-100">
            <Trash2 size={18} />
            <span className="text-sm">Delete</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h1 className="text-2xl font-semibold text-green">{friend.days_since_contact}</h1>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h1 className="text-2xl font-semibold text-green">{friend.goal}</h1>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h1 className="text-lg font-semibold text-green">{friend.next_due_date}</h1>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl shadow-sm py-10 px-6 flex justify-between items-start">
            <div>
              <h3 className="font-medium text-green">Relationship Goal</h3>
              <p className="text-sm text-gray-500 mt-2">
                Connect every <span className="font-semibold">30 days</span>
              </p>
            </div>

            <button className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer hover:text-red-400">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-medium mb-4 text-green">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={()=>handleAction(friendID, "call")} className="bg-gray-100 hover:bg-gray-200 rounded-xl h-32 md:h-36 lg:h-32 flex flex-col items-center justify-center gap-2 cursor-pointer transition">
                <PhoneCall size={22} />
                <span className="text-sm">Call</span>
              </button>

              <button onClick={()=>handleAction(friendID, "text")}  className="bg-gray-100 hover:bg-gray-200 rounded-xl h-32 md:h-36 lg:h-32  flex flex-col items-center justify-center gap-2 cursor-pointer transition">
                <MessageSquareMore size={22} />
                <span className="text-sm">Text</span>
              </button>

              <button onClick={()=>handleAction(friendID, "video")} className="bg-gray-100 hover:bg-gray-200 rounded-xl h-32 md:h-36 lg:h-32 flex flex-col items-center justify-center gap-2 cursor-pointer transition">
                <Video size={22} />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
