import { useState } from "react";
import { moneyFormat } from "../helpers";

function Header({ total, money }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>$ {moneyFormat(money - total)}</span> paranız kaldı!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak için <span>$ {moneyFormat(money)}</span> paranız var!
        </div>
      )}
      {money - total === 0 && (
        <div className="header empty">
          Paran bitti, harcamak için para kazan!
        </div>
      )}
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          letter-spacing: 1px;
        }

        .header.empty {
          background: linear-gradient(to bottom, #b82020, #be1414);
        }

        .header span {
          margin: 0 10px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Header;
