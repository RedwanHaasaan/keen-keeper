import { ChevronDown } from "lucide-react";
import TimelineCard from "../components/ui/TimelineCard";
import useKeeper from "../hooks/useKeeperCtx";

const Timeline = () => {
  const { setFilterType,fillterdTimeline } = useKeeper();
  return (
    <div className="px-2 flex flex-col gap-6 xl:min-h-116">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-green">
          Timeline
        </h1>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex justify-between text-gray-500"
          >
            <span>Filter Timeline</span>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setFilterType("all")}>All</a>
            </li>
            <li>
              <a onClick={() => setFilterType("text")}>Text</a>
            </li>
            <li>
              <a onClick={() => setFilterType("call")}>Call</a>
            </li>
            <li>
              <a onClick={() => setFilterType("video")}>Video</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Timeline card */}
        {fillterdTimeline.length > 0 ? (
          fillterdTimeline.map((entry) => (
            <TimelineCard key={entry.id} timelinedata={entry} />
          ))
        ) : (
          <p className="text-gray-500 flex justify-center items-center lg:text-3xl">
            No timeline entries yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Timeline;
