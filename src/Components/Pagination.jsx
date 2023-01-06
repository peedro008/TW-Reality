import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
  paginationSize,
  paginator,
  setPaginator,
}) => {

  const Screen = window.screen
  const [disabled, setDisabled] = useState();
  useEffect(() => {

      paginationSize.length === paginator &&
      setDisabled({ pointerEvents: "none", opacity: "0.5" });

  }, [paginator]);


  return (
    <div  className={Screen.width < 1000 ?"PaginatorBoxIpad" : "PaginatorBox"}>
      <div
        className="PaginatorLeft"
        onClick={() => {
          paginator !== 1 && setPaginator(paginator - 1);
          setDisabled();
      
        }}
      >
        <AiOutlineLeft  size={"20px"} />
      </div>
      <div className="PaginatorNum">{paginator}</div>
      <div
        className="PaginatorRight"
        style={disabled}
        onClick={() => {
          setPaginator(paginator + 1);
        }}
      >
        <AiOutlineRight size={"20px"} />
      </div>
    </div>
  );
};

export default Pagination;
