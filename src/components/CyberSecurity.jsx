import React from 'react';
import Card from './Card';

const CyberSecurity = ({data}) => {
    const cyberSecurity=data.filter((item)=>item.head==="Cyber Security")
    return (
        <div>
            <h1>Cyber Security</h1>
            <div class="container">
            {cyberSecurity.map((item,index)=>{
                return(
                    <Card item={item} index={index} />
                )
            })}
        </div>
        </div>
    );
};

export default CyberSecurity;