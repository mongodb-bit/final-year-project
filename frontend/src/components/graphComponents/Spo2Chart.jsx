import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Spo2Chart = ({ data }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">SpO2 (%)</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[85, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="spo2"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Spo2Chart;
