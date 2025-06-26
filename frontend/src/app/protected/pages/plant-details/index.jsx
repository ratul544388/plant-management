import PageLoader from "@/components/page-loader";
import PageTitle from "@/components/page-title";
import { request } from "@/lib/request";
import NotFound from "@/app/not-found";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useParams } from "react-router";

const PlantDetails = () => {
  const { slug } = useParams();

  const { data: plant, isPending } = useQuery({
    queryKey: ["plant", slug],
    queryFn: () => request({ url: `/api/plants/${slug}` }),
  });

  if (isPending) return <PageLoader />;

    if (!plant?.data) {
    return <NotFound />;
  }

  const {
    image,
    name,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userEmail,
    userName,
  } = plant.data;

  return (
    <div className="bg-background max-w-3xl mx-auto overflow-hidden rounded-lg pb-6 shadow-md">
      <PageTitle>{name}</PageTitle>
      <img
        src={image}
        alt={name}
        className="h-72 w-full object-cover object-center"
      />
      <div className="space-y-4 p-6">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
          {name}
        </h2>
        <p className="text-muted-foreground text-sm">
          Added by{" "}
          <span className="text-foreground/70 font-semibold">{userName}</span> (
          {userEmail})
        </p>

        <div className="text-muted-foreground grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
          <p>
            <span className="text-foreground font-semibold">Category:</span>{" "}
            {category}
          </p>
          <p>
            <span className="text-foreground font-semibold">Care Level:</span>{" "}
            {careLevel}
          </p>
          <p>
            <span className="text-foreground font-semibold">
              Watering Frequency:
            </span>{" "}
            {wateringFrequency}
          </p>
          <p>
            <span className="text-foreground font-semibold">
              Health Status:
            </span>{" "}
            {healthStatus}
          </p>
          <p>
            <span className="text-foreground font-semibold">Last Watered:</span>{" "}
            {format(new Date(lastWateredDate), "MMMM dd, yyyy")}
          </p>
          <p>
            <span className="text-foreground font-semibold">
              Next Watering:
            </span>{" "}
            {format(new Date(nextWateringDate), "MMMM dd, yyyy")}
          </p>
        </div>

        <div>
          <h3 className="text-primary mt-6 mb-2 text-xl font-semibold">
            Description
          </h3>
          <div
            className="prose prose-green dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
