import React from 'react';

export default function Categories({ categories }) {  
    return (
        <div>
            <ul className="categories">
                {categories?.map((item, idx) => (
                    <li key={idx}>
                        <button className="category">
                            {item.category}
                            <span className="category-count">{item.count}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}