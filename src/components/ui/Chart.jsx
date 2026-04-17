import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useKeeper from "../../hooks/useKeeperCtx";

const Chart = () => {
  const { chartData } = useKeeper();

  const COLORS = ["#8B5CF6", "#1F2937", "#22C55E"];

  const hasData =
    chartData &&
    chartData.length > 0 &&
    chartData.some(item => item.value > 0);

  if (!hasData) {
    return (
      <div className="w-full h-88 flex items-center justify-center text-gray-400">
        No data available to display
      </div>
    );
  }

  return (
    <div className="w-full h-88">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;