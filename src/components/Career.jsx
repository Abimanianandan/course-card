import React from 'react';
import Card from './Card';

const Career = ({data}) => {
    const careerData=data.filter((item)=>item.head==="Career")
    return (
        <div>
            <h1>Career</h1>
            <div class="container">
            {careerData.map((item,index)=>{
                return(
                    <Card item={item} index={index} />
                )
            })}
        </div>
        </div>
    );
};

export default Career;