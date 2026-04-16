import React, { useState } from 'react';

export default function Categories({ categories }) { 
    const [category, setCategory] = useState("All"); 
    
    return (
        <div>
            <ul className="categories">
                {categories?.map((item, idx) => (
                    <li key={idx}>
                        <button 
                            className={`category ${category === item.category ? 'active' : ''}`} 
                            onMouseOver={() => setCategory(item.category)}
                        >
                            {item.category}
                            <span className="category-count">{item.count}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}