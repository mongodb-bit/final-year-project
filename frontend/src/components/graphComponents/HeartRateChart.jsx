import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const statusColor = {
  red: "#ef4444",
  yellow: "#facc15",
  green: "#22c55e",
};

const HeartRateChart = ({ data, status }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Heart Rate (BPM)</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke={statusColor[status]}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeartRateChart;
