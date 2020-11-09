import React from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const herosFiltered = heroes;
    
    const [{search}, handleInputChange, reset] = useForm({
        search:''
    });

    const handleSearch = (e) => {
        e.preventDefault();
        if ( search.trim().length <= 1 ){
            return;
        }
        console.log(search);
        reset();
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            name="search"
                            placeholder="Find your hero"
                            className="form-control"
                            value={search}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        herosFiltered.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
