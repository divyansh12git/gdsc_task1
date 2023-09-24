import React from "react";

export const SearchBar=(props)=>{
   
    
    return <input onChange={props.call} type="text" className=" flex flex-col  justify-center pl-5 w-[350px] text-lg
    h-10 rounded-full  bg-slate-300 text-slate-600 outline-none ml-56 "placeholder="Search" />
         
}


