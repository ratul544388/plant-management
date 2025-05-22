import React from "react";

const TopPlantCareMistake = () => {
  return (
    <section className="p-6 bg-background mt-12 rounded-xl shadow-md">
      <h2 className="text-primary mb-6 text-2xl font-bold">
        Top Plant Care Mistakes
      </h2>
      <ul className="text-muted-foreground list-disc space-y-2 pl-6">
        <li>Overwatering your plants.</li>
        <li>Not providing enough light.</li>
        <li>Using the wrong type of soil.</li>
        <li>Ignoring signs of pests or diseases.</li>
        <li>Skipping regular checks on watering schedules.</li>
      </ul>
    </section>
  );
};

export default TopPlantCareMistake;
