import IntroFilter from "@/app/modules/homePage/components/IntroFilter";
import TraderCard from "@/app/modules/homePage/components/TraderCard";

export default function HomePageModule() {
  return (
    <div className="text-black-900 w-full">
      <div className="flex flex-col items-center justify-start px-5 w-full">
        <IntroFilter />
        <div className="w-full grid grid-cols-3 gap-4">
          <TraderCard />
          <TraderCard />
          <TraderCard />
          <TraderCard />
          <TraderCard />
          <TraderCard />
          <TraderCard />
          <TraderCard />
        </div>
      </div>
    </div>
  );
}
