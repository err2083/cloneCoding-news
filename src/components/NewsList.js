import React, { useState, useEffect }from 'react'
import './NewsItem.scss'
import NewsItem from "./NewsItem";
import axios from 'axios';
import usePromise from '../lib/usePromise'

const apiKey='';


const NewsList = ( {category} ) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`);
    }, [category]);

    if (loading) {
        return <div className="NewsListBlock">대기 중...</div>
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <div className='NewsListBlock'>에러 발생</div>
    }

    const { articles } = response.data;
    return (
        <div className="NewsItemBlock">
            {articles.map(article => (<NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
};

export default NewsList;