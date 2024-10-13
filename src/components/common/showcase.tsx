import ShowcaseCard from "./showcase-card";

const ShowcaseList = () => {
  return (
    <div className=" container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
      </div>
    </div>
  );
};

export default ShowcaseList;
