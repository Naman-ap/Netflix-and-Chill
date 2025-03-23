import React,{useEffect, useState} from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { NavLink ,useNavigate,Link } from "react-router-dom";
import {IoSearchOutline} from "react-icons/io5";
const Header=()=>
{
    const [input,setInput]=useState("");
    const Navigate=useNavigate("/");
    const Navigation = [ 
        {
            label:"Tv Shows",
            href: ''
        },
        {
            label:"Movies",
            href: 'movies'
        }
    ]

    const handleSubmit=(e)=>{
        e.preventDefault();
        Navigate(`/search?q=${input}`)
        
    }
    return(
      <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
        <div className="container mx-auto px-3 flex items-center h-full">
             <div>
                <Link to="/">
                <img 
                src={logo}
                alt="logo"
                width={120}
                />
                </Link>
        
             </div>
             <nav className="flex items-center space-x-4 ml-4 ">
                {Navigation.map((item)=>{
                return (
                    <div>
                        <NavLink key={item.label} to={item.href} className={"px-2 hover:text-white"} activeClassName="text-white">
                            {item.label}
                        </NavLink>
                    </div>
                )
            })}
              
                    
             </nav>
             <div className="flex ml-auto gap-2 items-center">
             <form onSubmit={handleSubmit} >
                    <input 
                    type="text"
                    placeholder="Search..."
                    className="w-100 h-10 px-2 bg-transparent outline-none overflow-hidden"
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }

                    }
                    value={input}

                    />
                    <button>
                    <IoSearchOutline className="text-white " />
                    </button>
                </form>
               
    
            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                
                    <img 
                    src={user}
                    width="w-full h-full"
                    />
               </div>
             </div>

            </div>
        </header>
    )
}
export default Header;