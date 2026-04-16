const StatCard = ({ value, label }) => {
    return (
        <div className='p-8 flex flex-col items-center gap-2 bg-white rounded-lg shadow-sm'>
            <div>
                <span className="text-green font-semibold text-3xl">{value}</span>
            </div>
            <div>
                <span className='text-lg text-gray-500 font-normal'>{label}</span>
            </div>
        </div>
    );
};

export default StatCard;