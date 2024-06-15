// Home.js
import React from 'react';
import CategoryItem from '../Components/CategoryCard/CategoryCard';
import './Home.css';
import categoryData from '../Constants/constant';
import { Link } from 'react-router-dom';


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
                        <li><Link to={{ pathname: `/ExploreGreenPvtLtd`}}>Home</Link></li>
                        <li><Link to={{ pathname: `/ExploreGreenPvtLtd/details`}}>Biology Mathematics</Link></li>
                        <li><Link to={{ pathname: `/ExploreGreenPvtLtd/details`}}>Computer Maths</Link></li>
                        <li><Link to={{ pathname: `/ExploreGreenPvtLtd/details`}}>Science</Link></li>
                        <li><Link to={{ pathname: `/ExploreGreenPvtLtd/details`}}>Commerce</Link></li>
                        <li><Link to={{ pathname: `/ExploreGreenPvtLtd/details`}}>Vocational</Link></li>
                        <li><Link to={{ pathname: `/ExploreGreenPvtLtd/details`}}>All</Link></li>
                        
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