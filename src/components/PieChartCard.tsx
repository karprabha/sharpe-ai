import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    PieLabelRenderProps,
} from "recharts";

const RADIAN = Math.PI / 180;

interface PieChartCardProps {
    userId1Posts: number;
    otherUsersPosts: number;
}

type RenderCustomizedLabelProps = PieLabelRenderProps & {
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
};

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: RenderCustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = parseFloat(cx as string) + radius * Math.cos(-midAngle * RADIAN);
    const y = parseFloat(cy as string) + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > parseFloat(cx as string) ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const PieChartCard: React.FC<PieChartCardProps> = ({
    userId1Posts,
    otherUsersPosts,
}) => {
    const pieChartData = [
        { name: "User ID 1", value: userId1Posts },
        { name: "Other Users", value: otherUsersPosts },
    ];

    const colors = ["#0088FE", "#00C49F"];

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={renderCustomizedLabel}
                    >
                        {pieChartData.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mb-10">
                {pieChartData.map((entry, index) => (
                    <div
                        key={`legend-${index}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "1rem",
                        }}
                    >
                        <div
                            style={{
                                width: "1rem",
                                height: "1rem",
                                marginRight: "0.5rem",
                                borderRadius: "50%",
                                backgroundColor: colors[index % colors.length],
                            }}
                        />
                        <span>
                            {entry.name} Posts : {entry.value}{" "}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartCard;
