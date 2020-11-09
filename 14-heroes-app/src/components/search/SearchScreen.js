import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHerosByName } from '../../selectors/getHerosByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    
    const [{search}, handleInputChange] = useForm({
        search: q
    });

    const herosFiltered = useMemo(() => getHerosByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        if ( search.trim().length < 1 ){
            return;
        }
        history.push(`?q=${ search }`);
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
                    {(q === '') 
                        && <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    {(q !== '' && herosFiltered.length === 0) 
                        && <div className="alert alert-danger">
                                There's no hero with { q }
                            </div>
                    }
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
