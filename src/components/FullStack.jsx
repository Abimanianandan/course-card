import React from 'react';
import Card from './Card';

const FullStack = ({data}) => {
    const fullStackData=data.filter((item)=>item.head==="Full Stack developement")
    return (
        <div>
            <h1>Full Stack Developement</h1>
            <div class="container">
                
            {fullStackData.map((item,index)=>{
                return(
                    <Card item={item} index={index} />
                )
            })}
            </div>
             </div>
            
    );
};

export default FullStack;