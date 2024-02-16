import React from "react";
import Card from "./Card";

const All = ({ data }) => {
  return (
    <div>
      <h1>All Course</h1>
      
      <div class="container">
      {data.map((item, index) => {
        return (
          <>
         
            <Card item={item} index={index} />
            
          </>
        );
      })}
    </div>
    </div>
  );
};

export default All;
