import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      {/* gives the colours of the pie chart */}
      <AreaCard
        colors={["#e4e8ef", "#475be8" ]}
        percentFillValue={80}
        cardInfo={{
          title: "Waste composition distribution",
          value: "60%",
          text: "Total waste collected",
        }}
      />
      <AreaCard
        colors={[ "#e4e8ef", "#4ce13f" ]}
        percentFillValue={50}
        cardInfo={{
          title: "Bin Utilization Rate",
          value: "50%",
          text: "Bins in Use",
        }}
      />
      <AreaCard
        colors={[ "#e4e8ef", "#f29a2e" ]}
        percentFillValue={40}
        cardInfo={{
          title: "Disposal Rate",
          value: "40%",
          text: "Recycling Success",
        }}
      />
    </section>
  );
};

export default AreaCards;
