function KPICards() {

  const cards = [
    {
      title: "Employees",
      value: 125,
      color: "#3B82F6"
    },
    {
      title: "Visitors",
      value: 78,
      color: "#10B981"
    },
    {
      title: "Departments",
      value: 12,
      color: "#F59E0B"
    },
    {
      title: "Avg Salary",
      value: "₹8.5L",
      color: "#EF4444"
    }
  ];

  return (
    <div className="kpi-grid">

      {cards.map((card, index) => (

        <div
          key={index}
          className="kpi-card"
          style={{
            borderLeft: `5px solid ${card.color}`
          }}
        >

          <h4>{card.title}</h4>

          <h2>{card.value}</h2>

        </div>

      ))}

    </div>
  );
}

export default KPICards;