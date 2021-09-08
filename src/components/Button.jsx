import React from 'react'
import classNames from 'classnames'

const Button = ({ classname, outline, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', classname, {
                'button--outline': outline,
            })}
        >
            {children}
        </button>
    )
}

export default Button
