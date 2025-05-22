import PageTitle from "@/components/page-title";
import Banner from "./_components/banner";
import BeginnerGuide from "./_components/beginner-guide";
import NewPlants from "./_components/new-plants";
import TopPlantCareMistake from "./_components/top-plant-care-mistake";

const Home = () => {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <Banner />
      <NewPlants />
      <TopPlantCareMistake />
      <BeginnerGuide />
    </>
  );
};

export default Home;
