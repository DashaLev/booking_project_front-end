import {Link} from 'react-router-dom';

export const Place = ({item}) => {

  return (
      <div>
          <h3>{item.title}</h3>
          <h4>{item.country}, {item.city}, {item.address.street}, {item.address.suite}</h4>
          <p>{item.price_per_night}, {item.currency}</p>

          <Link to={{ pathname: `/places/${item._id}`, state: item } } >
          

              Look details</Link>
      </div>
  )
}