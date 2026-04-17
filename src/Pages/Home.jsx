import Hero from '../components/Hero';
import FriendCard from '../components/ui/FriendCard';
import StatCard from '../components/ui/StatCard';
import useKeeper from './../hooks/useKeeperCtx';
import { Loader } from 'lucide-react';

const Home = () => {
    const {friends, stats, loading} = useKeeper();
    return (
        <div className='flex flex-col'>
            <div className='py-4 px-1 lg:pt-20'>
                <Hero/>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-2 pt-5 lg:pt-10'>
                <StatCard value={stats.totalFriends} label="Total Friends" />
                <StatCard value={stats.onTrack} label="On Track" />
                <StatCard value={stats.needAttention} label="Need Attention" />
                <StatCard value={stats.interactionsThisMonth} label="Interactions This Month" />
            </div>
            <div className='divider px-2'></div>
            <div className='px-2 flex flex-col gap-4 pb-10'>
                <h1 className='text-lg lg:text-2xl font-semibold text-neavy'>Your Friends</h1>
                
                {loading ? (
                    <div className='flex justify-center items-center py-20'>
                        <div className='flex flex-col items-center gap-4'>
                            <Loader className='w-12 h-12 text-primary animate-spin' />
                            <p className='text-gray-600 font-medium'>Loading your friends...</p>
                        </div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
                        {/* Friend list or cards will go here */}
                        {friends.map((friend)=><FriendCard key={friend.id} friend={friend}/>)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;