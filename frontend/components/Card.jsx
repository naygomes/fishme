export default function Card({
  label = "",
  value = 0,
  dataType,
  color = "black-50",
}) {
  return (
    <>
      <div className={`card ${color !== "black-50" ? "border-" + color : ""}`}>
        <div className="card-body">
          <h6 className={`text-center fw-bold text-${color} mb-3`}>{label}</h6>
          <h4
            className={`text-center fw-bold mb-0 ${
              color !== "black-50" ? "text-" + color : ""
            }`}
          >
            {dataType === "currency" && "R$ "}
            {value.toLocaleString("pt-br", {
              maximumFractionDigits: 2,
              minimumFractionDigits: dataType === "currency" ? 2 : 0,
            })}
            {dataType === "weight" && " Kg"}
          </h4>
        </div>
      </div>
    </>
  );
}
