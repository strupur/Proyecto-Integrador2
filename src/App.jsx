import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import AdminProduct from "./pages/admin-product/AdminProduct";
import AcercaDeNosotros from "./pages/acerca-de-nosotros/AcercaDeNosotros";
import ProductDetail from './pages/product-detail/ProductDetail';
import OrderDialog from './components/order-dialog/OrderDialog';
import AdminUser from './pages/admin-user/AdminUser';
import Register from './pages/register/Register';



export default function App() {


  return (
    <>

      <OrderDialog />

      <Header />

      <main className="main-container">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path='/product-detail/:id' element={<ProductDetail />} />

          <Route path="/contact" element={<Contact />} />

          

          <Route path="/admin-product"
            element={<AdminProduct />}
          />

          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />

          <Route path="/admin-user"
            element={<AdminUser />}
          />

          <Route path="/register"
            element={<Register />}
          />

        </Routes>
      </main>

      <Footer></Footer>
    </>
  )
}
