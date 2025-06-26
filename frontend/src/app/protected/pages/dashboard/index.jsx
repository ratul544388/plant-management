import PageTitle from "@/components/page-title";
import { request } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import StatsSkeleton from "./components/stats-skeleton";

const Dashboard = () => {
  const { data: stats, isPending } = useQuery({
    queryKey: ["Dashboard Stats"],
    queryFn: () => request({ url: "/api/plants/dashboard-stats" }),
  });

  const cards = [
    {
      label: "My Plant Count",
      value: stats?.data.totalPlants ?? 0,
    },
    {
      label: "Healthy Plants",
      value: stats?.data.healthStatusCounts.Healthy ?? 0,
    },
    {
      label: "Wilting Plants",
      value: stats?.data.healthStatusCounts.Wilting ?? 0,
    },
    {
      label: "Diseased Plants",
      value: stats?.data.healthStatusCounts.Diseased ?? 0,
    },
    {
      label: "Dead Plants",
      value: stats?.data.healthStatusCounts.Dead ?? 0,
    },
  ];


  return (
    <div className="w-full">
      <PageTitle>Dashboard</PageTitle>
      <h1 className="text-primary mb-8 text-start text-4xl font-bold">Stats</h1>
      {isPending && <StatsSkeleton />}
      <ul className="grid w-full grid-cols-2 gap-5">
        {cards.map((card, idx) => (
          <li
            key={idx}
            className="rounded-lg border bg-background p-6 text-center shadow-md"
          >
            <h2 className="text-lg font-semibold">
              {card.label}
            </h2>
            <p className="mt-2 text-3xl font-bold text-primary">
              {card.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
