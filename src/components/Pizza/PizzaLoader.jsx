import ContentLoader from 'react-content-loader'

import React from 'react'

function PizzaLoader() {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={457}
            viewBox='0 0 280 457'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
        >
            <rect x='338' y='548' rx='3' ry='3' width='88' height='6' />
            <rect x='286' y='521' rx='3' ry='3' width='52' height='6' />
            <rect x='360' y='526' rx='3' ry='3' width='410' height='6' />
            <rect x='212' y='532' rx='3' ry='3' width='380' height='6' />
            <rect x='185' y='520' rx='3' ry='3' width='178' height='6' />
            <circle cx='472' cy='535' r='20' />
            <circle cx='130' cy='130' r='130' />
            <rect x='170' y='319' rx='0' ry='0' width='0' height='1' />
            <rect x='0' y='279' rx='3' ry='3' width='260' height='30' />
            <rect x='0' y='318' rx='6' ry='6' width='260' height='84' />
            <rect x='512' y='525' rx='0' ry='0' width='100' height='15' />
            <rect x='0' y='415' rx='3' ry='3' width='71' height='30' />
            <rect x='141' y='414' rx='15' ry='15' width='120' height='30' />
        </ContentLoader>
    )
}

export default PizzaLoader
