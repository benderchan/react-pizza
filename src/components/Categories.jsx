import React from 'react'

const Categories = React.memo(({ onCategoryClick, categories, activeCategory }) => {
    return (
        <div className='categories'>
            <ul>
                <li onClick={() => onCategoryClick(null)} className={activeCategory === null ? 'active' : ''}>
                    Все
                </li>
                {categories &&
                    categories.map((category, index) => (
                        <li
                            onClick={() => onCategoryClick(index)}
                            className={activeCategory === index ? 'active' : ''}
                            key={`${category}_${index}`}
                        >
                            {category}
                        </li>
                    ))}
            </ul>
        </div>
    )
})

export default Categories
