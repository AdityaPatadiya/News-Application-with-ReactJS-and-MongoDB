import React from 'react';
import './style/categories.css'
import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <>
            <div class="container text-center">
                <div class="row">
                    <div class="col"><Link to="./General_News_Page" className='text-decoration-none'>General</Link></div>
                    <div class="col"><Link to="./Business_News" className='text-decoration-none'>Business</Link></div>
                    <div class="col"><Link to="./Sports_news" className='text-decoration-none'>Sports</Link></div>
                </div>
                <div class="row">
                    <div class="col"><Link to="./Technology_News" className='text-decoration-none'>Technology</Link></div>
                    <div class="col"><Link to="./Health_News" className='text-decoration-none'>Health</Link></div>
                    <div class="col"><Link to="./Science_News" className='text-decoration-none'>Science</Link></div>
                </div>
            </div><br/>
        </>
    );
}