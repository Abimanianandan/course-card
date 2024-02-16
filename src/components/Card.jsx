import React from "react";

const Card = ({ item, index }) => {
  return (
    <div>
      <div key={index}>
        
      
          <div class="card ">
            <img src={item.img} class="card-img-top" alt="img" />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.content}</p>
              <p class="fw-bolder"style={{color:"green", fontSize:"12px"}}>READ MORE  </p>
            </div>
            
            <div class="card-footer">
              <small class="text-body-secondary">{item.date}</small>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
