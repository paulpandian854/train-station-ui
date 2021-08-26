import React, {Suspense} from 'react';

import '../App.css';
import App from '../App';
import { BrowserRouter, Route } from 'react-router-dom';
const TrainDetailsComponent = React.lazy(() => import('../Components/Train-Details/TrainDetailsComponent'));
const FunctionalComponent1 = React.lazy(() => import('../Components/Functional-Components/FunctionalComponent1'))
const ThemedButton = React.lazy(() => import('../Components/Child-Components/ButtonComponent'));
const ChildComponent = React.lazy(() => import('../Components/Child-Components/ChildComponent'));

function Routing ()  {
        return (
          <Suspense fallback={<div>Loading...</div>}>
           <BrowserRouter>
             <Route path={"/App"} component={App}></Route>
             <Route path={"/TrainDetails"} component={TrainDetailsComponent}></Route>
             <Route path={"/Func1"} component={FunctionalComponent1}></Route>
             <Route path={"/Button"} component={ThemedButton}></Route>
             <Route path={"/Child"} component={ChildComponent}></Route>
           </BrowserRouter>
           </Suspense>
        );
}

export default Routing;
