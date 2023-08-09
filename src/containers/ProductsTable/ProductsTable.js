import './ProductsTable.css';
import Table from '../../components/Table/Table'
import logoproducts from '../../assets/logo_products.svg'

function ProductsTable() {
    return (
        <div className='container'>
            <div className='header__logo'><img src={logoproducts} alt='logotype' /></div>
            <Table />
            
        </div>
    )
}

export default ProductsTable;