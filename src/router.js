import Login from './containers/Login/Login';
import ProductsTable from './containers/ProductsTable/ProductsTable';
import ProductsPreview from './containers/ProductsPreview/ProductsPreview';
import ProductPreviewID from './containers/ProductPreviewID/ProductPreviewID'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivatRoute from './privatRoute'


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={ <Login />  } />
                
            <Route element={<PrivatRoute/>}>
                <Route path='/products-table' element={ <ProductsTable/> } />
                <Route path='/products-preview' element={<ProductsPreview />} />
                <Route path='/product-preview-id/:id' element={<ProductPreviewID/>} />
            </Route>

            <Route path='*' element={<div>Error 404! Page is not found!</div>} />
        </Routes>
    </BrowserRouter>
)


export default Router;
