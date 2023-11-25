import React from 'react'
import { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title = <h2>Search your one from Thousand of Products</h2>
const desc = 'We have largest collection of products'
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];

const banner = () => {
    const [searchInput, setSearchInput] = useState('')
    const [filetrProducts, setFilterProducts] = useState(productData)

    // search functionality
    const handlerSearch = (e) => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm);

        //filtering product based on search\
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilterProducts(filtered)
    }

    return (
        <div className='banner-section style-4'>
            <div className='container'>
                <div className='banner-content'>
                    {title}
                    <form>
                        <SelectedCategory select= {'all'}/>
                        <input type="text" name="search" id='search' placeholder='search your product' value={searchInput}
                            onChange={handlerSearch} />
                            <button type='submit'> <i class="icofont-search"></i></button>
                    </form>
                    <p>{desc}</p>
                    <ul className='lab-ul'>
                        {
                            searchInput && filetrProducts.map((product,i)=> <li key ={i}>
                                <Link to = {`shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default banner