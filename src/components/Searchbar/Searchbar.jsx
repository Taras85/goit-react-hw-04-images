import s from './Searchbar.module.css';
import {  useState } from "react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";


const Searchbar = ({onSubmit}) =>{
  const [query, setQuery]=useState('')
    


  const handleSubmit = e => {
    e.preventDefault();

   

    if (query.trim() === '') {
      toast.info('Please enter your search query.');
      return;
     
    }


    onSubmit(query.trim());
    setQuery('')
    
  }

  const handleSearchQuery = e => {
        setQuery(e.currentTarget.value.toLowerCase())
    }

    return (
                <header className={s.Searchbar}>
                    <form className={s.SearchForm} onSubmit={handleSubmit}>
                        <button type="submit" className={s.Button}>
                            <span className={s.label} ></span>
                          
                        </button>
        
                        <input
                            className={s.input}
                            type="text"
                           
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={handleSearchQuery}
                        />
                    </form>
                </header>
            );
  }

  


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default Searchbar;



