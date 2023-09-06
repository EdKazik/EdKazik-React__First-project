import Login from './containers/Login/Login';
import ProductsTable from './containers/ProductsTable/ProductsTable';
import ProductsPreview from './containers/ProductsPreview/ProductsPreview';
import ProductPreviewID from './containers/ProductPreviewID/ProductPreviewID'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivatRoute from './privatRoute'
import { ROUTING } from './constans';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTING.login} element={ <Login />  } />
                
            <Route element={<PrivatRoute/>}>
                <Route path={ROUTING.productsTable} element={ <ProductsTable/> } />
                <Route path={ROUTING.productsPreview} element={<ProductsPreview />} />
                <Route path={ROUTING.productPreviewID} element={<ProductPreviewID/>} />
            </Route>

            <Route path='*' element={<div>Error 404! Page is not found!</div>} />
        </Routes>
    </BrowserRouter>
)


export default Router;
