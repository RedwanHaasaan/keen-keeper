import { MessageCircleMore, Phone, Trash2, Video } from "lucide-react";
import useKeeper from "../../hooks/useKeeperCtx";
const iconMap = {
  text: MessageCircleMore,
  call: Phone,
  video: Video,
};
const TimelineCard = ({timelinedata}) => {
    const {handleDeleteTimelineEntry} = useKeeper();
  const Icon = iconMap[timelinedata.action];
  return (
    <div className="flex flex-row bg-white p-4 gap-4 items-center rounded-lg shadow-sm">
      <div>
        <Icon className="text-green" size={30} />
      </div>
      <div className="flex flex-row justify-between flex-1 items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-green font-medium">
            {timelinedata.action.toUpperCase()} With <span className="text-gray-500">{timelinedata.friendName}</span>
          </h1>
          <p className="text-gray-500">{timelinedata.date}</p>
        </div>
        <div>
            <Trash2 onClick={()=>handleDeleteTimelineEntry(timelinedata.id)} className="text-gray-500 hover:text-red-500 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
