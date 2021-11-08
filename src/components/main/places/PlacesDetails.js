import {Calendar} from '../calendar/Calendar';
import {useEffect, useState} from 'react';
import {getReservationsAxios} from '../../../services/reservation.service';

export const PlacesDetails = ({location:{state:item}}) => {

    let [takenDates, setTakenDates] = useState([])

    useEffect(() => {
        getReservationsAxios(item._id).then(({data}) => setTakenDates([...data]))
    },[item._id])

    return (
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price_per_night} {item.currency} per night</h2>
            <h3>{item.country}, {item.city}, {item.address.street}, {item.address.suite}</h3>
            <div>
                Guests: {item.guests},
                Rooms:
                <div>
                    {
                        Object.keys(item.rooms).map((key,index) => (
                            <div key={index}> {key}: {item.rooms[key]} </div>
                        ))
                    }
                </div>
            </div>
            <p>{item.description}</p>
            <Calendar takenDates={takenDates}/>
        </div>
  )
}