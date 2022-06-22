import React from "react";

export default function TabelaResumo({ label = "", data = {}, dataType = "" }) {
  return (
    <div className="card">
      <div className="card-body px-0 pb-0">
        <h6 className="fw-bold m-0 mb-4 px-3">{label}</h6>
        <div className="table-responsive">
          <table className="table m-0">
            <tbody>
              {Object.values(data).map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td
                      scope="row"
                      colSpan="3"
                      className={`col-9 fw-bold p-3 m-0 ${
                        index === Object.values(data).length - 1
                          ? "border-0"
                          : ""
                      } ${
                        item.color && label === "Resumo das cobranças"
                          ? "text-" + item.color
                          : ""
                      }`}
                    >
                      {item.label}
                    </td>
                    <td
                      className={`col-3 p-3 m-0 text-end ${
                        index === Object.values(data).length - 1
                          ? "border-0"
                          : ""
                      } text-${
                        item.color && label === "Resumo das cobranças"
                          ? item.color
                          : "black-50"
                      }`}
                    >
                      {dataType === "currency" && "R$ "}
                      {item.value.toLocaleString("pt-br", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: dataType === "currency" ? 2 : 0,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
