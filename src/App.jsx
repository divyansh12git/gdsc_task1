import  React,{useState} from "react";
import Card from "./component/card"
import {SearchBar} from "./component/search";
import data from "./data";

let createcard=(content)=>{
    return <Card 
        key={content.id}
        name={content.name}
        color={content.color}
        background={content.background}
        description={content.description}
        actor={content.actor}
        image={content.image}
        type={content.type}
    />
} 
const App= ()=>{
    const [input,setinput]=useState('');
    function handleChange(event){
        setinput(event.target.value);
         
        
    }
    // const [filteredlist,setfilteredlist]=useState(data);

    let filterBySearch = (item) => {
        const query = input;
        if(query===""){
            return item;
        }
        else if(item.name.toLowerCase().includes(query.toLowerCase())){
            return item;
        }
      };
    return <>
    
        <div className="h-screen grid grid-cols-1 gap-2  screen bg-zinc-100 ">
            <div className=" flex">
            <span className="mt-10 flex">
                <img src={require('./logo.png')} alt="" className="h-10 ml-20 " />
                <p className="text-4xl ml-2 font-thin">STUDIOS</p>
                <SearchBar className="ml-[10%]" 
                    call={handleChange}
                />
            </span>

            </div>
                
            <div className=" flex w-screen pl-20 pt-20 overflow-x-auto"> 
                {data.filter(filterBySearch).map(createcard)}
            </div>
            <div className="bg-slate-400 flex justify-center items-center text-3xl text-zinc-300">
                Made by Divyansh
            </div>
        </div>












    </>


}

export default App;