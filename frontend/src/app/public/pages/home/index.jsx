import PageTitle from "@/components/page-title";
import Banner from "./_components/banner";
import BeginnerGuide from "./_components/beginner-guide";
import HowItWorks from "./_components/how-it-works";
import NewPlants from "./_components/new-plants";
import TopPlantCareMistake from "./_components/top-plant-care-mistake";
import Community from "./_components/community";
import HandPickPlants from "./_components/hand-picked-plants";

const Home = () => {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <Banner />
      <NewPlants />
      <HowItWorks/>
      <Community/>
      <HandPickPlants/>
      <TopPlantCareMistake />
      <BeginnerGuide />
    </>
  );
};

export default Home;
