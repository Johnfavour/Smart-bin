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
          title: "Todays Sales",
          value: "$20.4k",
          text: "we have sold 123 items",
        }}
      />
      <AreaCard
        colors={[ "#e4e8ef", "#4ce13f" ]}
        percentFillValue={50}
        cardInfo={{
          title: "Todays Revenue",
          value: "$7.4k",
          text: "Available for payout",
        }}
      />
      <AreaCard
        colors={[ "#e4e8ef", "#f29a2e" ]}
        percentFillValue={40}
        cardInfo={{
          title: "In Escro",
          value: "$10.4k",
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;
