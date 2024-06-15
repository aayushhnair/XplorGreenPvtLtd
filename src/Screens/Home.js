// Home.js
import React from 'react';
import CategoryItem from '../Components/CategoryCard/CategoryCard';
import './Home.css';
import categoryData from '../Constants/constant';

const Home = () => {

    const categories = categoryData

    return (
        <div className='container'>
            <header className='header'>
                <div className='mainheader'>
                    <h1>EXPLORE GREEN PVT. LTD.</h1>
                </div>
                <nav className='navbar'>
                    <ul className='navigation'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/details">Biology Mathematics</a></li>
                        <li><a href="/details">Computer Maths</a></li>
                        <li><a href="/details">Science</a></li>
                        <li><a href="/details">Commerce</a></li>
                        <li><a href="/details">Vocational</a></li>
                        <li><a href="/details">All</a></li>

                    </ul>
                </nav>
            </header>
            <main>
                <div className='categories'>
                    {categories.map((category, index) => (
                        <CategoryItem key={index} category={category} />
                    ))}
                </div>
                <div className='entrence'>
                    <h1>Engineering <span>Entrance</span> Exams</h1>
                </div>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Explore Green Pvt Ltd. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;