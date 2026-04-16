import {
  Archive,
  BellRing,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";

const FriendDetails = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid px-2 lg:grid-cols-4 gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt=""
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />

            <h2 className="font-semibold text-lg">Emma Wilson</h2>

            <span className="inline-block mt-2 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
              Overdue
            </span>

            <div className="mt-2">
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                FAMILY
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-3 italic">
              "Former colleague, great mentor"
            </p>

            <p className="text-xs text-gray-400 mt-1">Preferred: email</p>
          </div>

          {/* Sidebar Actions */}
          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-2">
            <BellRing className="text-gray-500" size={18} />
            <span className="text-sm">Snooze 2 Weeks</span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-2">
            <Archive className="text-gray-500" size={18} />
            <span className="text-sm">Archive</span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-2 text-red-500">
            <Trash2 size={18} />
            <span className="text-sm">Delete</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-3 flex flex-col gap-6">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h1 className="text-2xl font-semibold">62</h1>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h1 className="text-2xl font-semibold">30</h1>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h1 className="text-lg font-semibold">Feb 27, 2026</h1>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl shadow-sm py-10 px-6 flex justify-between items-start">
            <div>
              <h3 className="font-medium">Relationship Goal</h3>
              <p className="text-sm text-gray-500 mt-2">
                Connect every <span className="font-semibold">30 days</span>
              </p>
            </div>

            <button className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100 transition">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-medium mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <button className="bg-gray-100 hover:bg-gray-200 rounded-xl h-32 md:h-36 lg:h-32 flex flex-col items-center justify-center gap-2 transition">
                <PhoneCall size={22} />
                <span className="text-sm">Call</span>
                </button>

                <button className="bg-gray-100 hover:bg-gray-200 rounded-xl h-32 md:h-36 lg:h-32  flex flex-col items-center justify-center gap-2 transition">
                <MessageSquareMore size={22} />
                <span className="text-sm">Text</span>
                </button>

                <button className="bg-gray-100 hover:bg-gray-200 rounded-xl h-32 md:h-36 lg:h-32 flex flex-col items-center justify-center gap-2 transition">
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