import react from 'react';
import {Routes , Route} from 'react-router-dom';

import Home from './Home';
import Kids from './Kids';
import Mans from './Mans';
import Womans from './Womans';

function AllRoutes(){
    return (
        <div>
           <Routes>

     <Route path="/" element={<Home />} />
      <Route path="/mans" element={<Mans />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/womans" element={<Womans />} />
    
           </Routes>
        </div>
    )
}

export default AllRoutes;