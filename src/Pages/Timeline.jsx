import { ChevronDown, Search, ArrowUpDown, SearchCheck } from "lucide-react";
import TimelineCard from "../components/ui/TimelineCard";
import useKeeper from "../hooks/useKeeperCtx";

const Timeline = () => {
  const {
    setFilterType,
    processedTimeline,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
  } = useKeeper();
  return (
    <div className="px-2 flex flex-col gap-6 xl:min-h-116">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-green">
          Timeline
        </h1>
        
        {/* Controls Section - Responsive */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Filter Dropdown */}
          <div className="w-full lg:w-auto">
            <div className="dropdown dropdown-bottom w-full lg:w-52">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-outline w-full lg:w-auto btn-sm lg:btn-md flex justify-between text-gray-600 hover:bg-green hover:text-white hover:border-green"
              >
                <span>Filter Timeline</span>
                <span>
                  <ChevronDown size={18} />
                </span>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-full lg:w-52 p-2 shadow-lg"
              >
                <li>
                  <a onClick={() => setFilterType("all")} className="hover:bg-green hover:text-white">All</a>
                </li>
                <li>
                  <a onClick={() => setFilterType("text")} className="hover:bg-green hover:text-white">Text</a>
                </li>
                <li>
                  <a onClick={() => setFilterType("call")} className="hover:bg-green hover:text-white">Call</a>
                </li>
                <li>
                  <a onClick={() => setFilterType("video")} className="hover:bg-green hover:text-white">Video</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="flex-1 sm:flex-none">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or type..."
                className="input input-bordered input-sm lg:input-md w-full pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent rounded-lg"
              />
            </div>

            {/* Sort Button */}
            <button
              onClick={() =>
                setSortOrder(sortOrder === "newest" ? "oldest" : "newest")
              }
              className="btn btn-sm lg:btn-md btn-outline bg-green text-white flex items-center gap-2 whitespace-nowrap"
            >
              <ArrowUpDown size={18} />
              <span>{sortOrder === "newest" ? "Newest" : "Oldest"}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Timeline card */}
        {processedTimeline.length > 0 ? (
          processedTimeline.map((entry) => (
            <TimelineCard key={entry.id} timelinedata={entry} />
          ))
        ) : (
          <p className="text-gray-500 flex justify-center items-center lg:text-3xl py-10">
            No timeline entries yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Timeline;
