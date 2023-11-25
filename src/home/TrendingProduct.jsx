import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Ratting from '../components/Ratting';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';

const subTitle = "Choose Any Products";
const title = "Our Products";
const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]

const TrendingProduct = () => {
    const [items, setItem] = useState(ProductData)
    return (
        <div className='category-section style-4'>
            {/* main section */}
            <div className='container'>
                {/* section header */}
                <div className='section-header text-center pt-5'>
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>
                </div>

                {/* section body */}
                <div className='section-wrapper'>
                    <div className='row g-4 sponsor-slider'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={20}
                            autoplay={
                                {
                                    delay: 3000,
                                    disableOnInteraction: false
                                }
                            }
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                items.map((product) =>
                                <SwiperSlide key={product.id}>
                                    <div key={product.id} className='col'>
                                        <div className='course-item style-4'>
                                            <div className='course-inner'>
                                                <div className='course-thumb'>
                                                    <img src={product.imgUrl} />
                                                    <div className='course-category'>
                                                        <div className='course-cate'>
                                                            <a href="#">{product.cate}</a>
                                                        </div>
                                                        <div className='course-review'>
                                                            <Ratting />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* content */}
                                                <div className='course-content'>
                                                    <Link to={`/shop/${product.id}`} ><h5>{product.title}</h5></Link>
                                                    <div className='course-footer'>
                                                        <div className='course-author'>
                                                            <Link to='/' className='ca-name'>{product.brand}</Link>
                                                        </div>
                                                        <div className='course-price'>
                                                            {product.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProduct