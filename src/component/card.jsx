import React from "react";

const Card=(props)=>{
    return <div id="compo" className={`w-72 h-96 flex flex-col ${props.background} rounded-3xl  mr-5 shrink-0`}>
            <div  className={`w-72 h-64  rounded-t-3xl bg-white bg-top  bg-no-repeat bg-cover hover:`} style={{backgroundImage:`url(/images/${props.image})`,}}>
                {/* <img src={require('./images/blackwidow.jpg')} alt="" className="" /> */}
            </div>
            <p className={`text-2xl ${props.color}  mt-5 text-3xl font-semibold ml-6 `}>{props.name} </p>
            <div className="flex text-lg">
                <div className=" text-slate-400 ml-6">Actor: </div>
                <div className="text-slate-200 ml-2">{props.actor}</div>
            </div>
    

    </div>
}

export default Card;