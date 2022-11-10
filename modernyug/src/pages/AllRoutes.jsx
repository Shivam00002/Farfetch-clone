import react from 'react';
import {Routes , Route} from 'react-router-dom';

import Home from './Home';
import Kids from './Kids';
import Mens from './Mens';
import Womens from './Womens';

function AllRoutes(){
    return (
        <div>
           <Routes>

     <Route path="/" element={<Home />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/womens" element={<Womens />} />
    
           </Routes>
        </div>
    )
}

export default AllRoutes;