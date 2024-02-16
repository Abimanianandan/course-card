import React from 'react';
import Card from './Card';

const DataScience = ({data}) => {
    const dataScience=data.filter((item)=>item.head==="Data Science")
    return (
        <div>
            <h1>Data Science</h1>
            <div class="container">
            {dataScience.map((item,index)=>{
                return(
                    <Card item={item} index={index} />
                )
                
            })}
        </div>
        </div>
    );
};

export default DataScience;