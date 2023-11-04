import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component';

import Navigation from './components/Navigation/navigation.component';

import Authentication from './components/authentication/authentication.component';

import Shop from './components/routes/shop/Shop.component';

import Checkout from './components/routes/checkout/checkout.component';

import ContactUs from './components/contact-us/contact-us.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='Shop/*' element={<Shop/>}/>
        <Route path='contact' element={<ContactUs/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
};

export default App;