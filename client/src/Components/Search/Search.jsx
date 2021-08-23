import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSearched } from "../../JS/actions/searchAction";
import { getProducts  , getByCategories} from "../../JS/actions/products";
import { search } from "react-icons/fa";
import { Link } from "react-router-dom";


import "./Search.css"
const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [categorie, setCategorie] = useState("")

  /*useEffect(() => {
    dispatch(getProducts(search));
  }, [search]);*/

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProducts(search));
    // console.log(handleSubmit);
  };


  return (
    
    <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9">
            <div className="card p-4 mt-3">
              <h3 className="heading mt-5 text-center">Hi! Barbaach...!</h3>
              <div className="d-flex justify-content-center px-5">
                <div className="search"> <input type="text" className="search-input" placeholder="Barbech for a Products..." name="search" onChange={(e) => setSearch(e.target.value)} /> <button  onClick={handleSubmit} className="search-icon"> <i className="fa fa-search" /> </button> </div>
              </div>
              <div className="row mt-4 g-1 px-5 mb-6">
                <div className="col-md-2" >
                   <div className="card-inner p-3 d-flex flex-column align-items-center"> <img   src="https://cdn.primini.tn/a9da90a9-23cd-4b1d-8edd-b4e13532f0f5.svg" width={50} />
                    <div className="text-center mg-text" style={{height:"18px"}}>  <button className="button" value="Photo & Caméra" onClick={(e)=>{ dispatch(getByCategories("Photo & Caméra"))}}><span className="mg-text">Photo & Caméra</span> </button> </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-inner p-3 d-flex flex-column align-items-center" > <img src="https://cdn.primini.tn/6a256b8c-c078-4f7b-8864-6ea7ee410f9e.svg" width={50} />
                    <div className="text-center mg-text" style={{height:"18px"}} > <button className="button" value="Image & Son" onClick={(e)=>{ dispatch(getByCategories("Image & Son"))}}  ><span className="mg-text">Image & Son</span> </button>  </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn.primini.tn/7c195062-03aa-4160-b278-b163193a80db.svg" width={50} />
                    <div className="text-center mg-text">  <button className="button"  onClick={(e)=>{ dispatch(getByCategories("Electroménager"))}}  ><span className="mg-text">Electroménager</span> </button> </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn.primini.tn/c7bfe7f9-5779-4918-979b-d4a6a7c014e7.svg" width={50} />
                    <div className="text-center mg-text"><button className="button" onClick={(e)=>{ dispatch(getByCategories("Téléphonie"))}} > <span className="mg-text">Téléphonie</span>  </button> </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://cdn.primini.tn/f8e201ba-5baa-45bc-9231-8817df005940.svg" width={50} />
                    <div className="text-center mg-text"> <button className="button"  onClick={(e)=>{ dispatch(getByCategories("Informatique"))}}  >  <span className="mg-text">Informatique</span> </button> </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
         {/*<div className="container mt-4">
         
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card p-4 mt-5">
              <h3 className="heading mt-8 text-center">Hi! Barbaach...!</h3>
              <div className="d-flex justify-content-center px-5">
               
                <div className="search">
                
                <input type="text" className="search-input" placeholder="Barbech for a Products..." name="search"  onChange={(e) => setSearch(e.target.value)} /> 
                <button type="submit" className="search-icon"  onClick={handleSubmit}  >
                <i className="fa fa-search" style={{color:"black"}}/>
                  </button> 
                </div>
              </div>
              
            </div>
          </div>
        </div>
     
      
    </div>*/}
      </div>
      
    
  );
};

export default Search;
