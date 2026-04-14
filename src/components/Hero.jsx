import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-8">
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-xl font-bold sm:text-3xl lg:text-5xl text-neavy">Friends to keep close in your life</h1>
        <p className="text-base font-normal text-gray-400 lg:max-w-lg lg:mx-auto lg:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div>
        <button className="btn bg-green text-white rounded-sm">
            <Plus/>
            Add Friend
        </button>
      </div>
    </div>
  );
};

export default Hero;
