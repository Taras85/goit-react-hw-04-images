import s from './Searchbar.module.css';
import { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";


export class Searchbar extends Component {
  state = {
    query: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state
    


    if (query.trim() === '') {
      toast.info('Please enter your search query.');
      return;
    }
    this.props.onSubmit(query);
  }

  handleSearchQuery = e => {
    this.setState({
        query: e.currentTarget.value.toLowerCase()
    })
  }
  render() {
    return (
                <header className={s.Searchbar}>
                    <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={s.Button}>
                            <span className={s.label} ></span>
                          
                        </button>
        
                        <input
                            className={s.input}
                            type="text"
                           
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={this.handleSearchQuery}
                        />
                    </form>
                </header>
            );
  }
  
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}






