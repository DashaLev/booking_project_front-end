import {Route, Switch} from 'react-router';
import { Places } from './places/Places';
import { PlacesDetails } from './places/PlacesDetails';

export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Places}/>
                <Route path={'/places/:id'} render={(props) => {

                    return <PlacesDetails {...props}/>
                        }}/>
            </Switch>
        </main>

    )
}

