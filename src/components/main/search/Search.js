import { useState } from 'react';
import { useDispatch } from "react-redux";

import { getPlacesAxios } from '../../../services/place.service';
import { getPlacesList } from '../../../redux/actions';

export const Search = () => {

    let [query, setQuery] = useState({});

    let dispatch = useDispatch();

    const onInputChange = (e) => {
        let querySearch = {[e.target.name]: e.target.value}
        setQuery({...query, ...querySearch})
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
    }

    const getDataPlaces = () => {
        getPlacesAxios(query).then(({data}) => dispatch(getPlacesList(data)))
    }

    return (
        <div className="App">
            <form onSubmit={onSubmitForm}>
                <input type="text" onInput={onInputChange} name={'country'} placeholder={'Country'} />
                <input type="text" onInput={onInputChange} name={'city'} placeholder={'City'} />
                <input type="text" onInput={onInputChange} name={'guests'} placeholder={'Number guests'} />
                <input type="text" onInput={onInputChange} name={'min_price'} placeholder={'Min price'} />
                <input type="text" onInput={onInputChange} name={'max_price'} placeholder={'Max price'} />
                <input type="submit" onClick={() => getDataPlaces(query)}/>
            </form>
        </div>
    );
}