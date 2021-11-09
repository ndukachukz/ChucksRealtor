import PropertySingleCard from "../Property/PropertySingleCard";
/* 
  This is where the Carousel functionality will be.
*/
const CardList = () => {
  return (
    <div className="flex-wrap lg:flex-nowrap md:flex gap-4 ">
      <PropertySingleCard />
      <PropertySingleCard />
      <PropertySingleCard />
      <PropertySingleCard />
    </div>
  );
};

export default CardList;
