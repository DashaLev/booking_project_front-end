import { useSelector } from 'react-redux';
import { Place } from './Place';
import { Search } from '../search/Search';

export const Places = () => {

    let { placesList } = useSelector(state => state)

    return (
        <div>
            <Search/>
            <div>
                { placesList &&
                    placesList.map(item => <Place key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};