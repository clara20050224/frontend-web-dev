import React from 'react'

const PengenalanJSX = () => {
    return <h1>Hello World!</h1>
}

const PengenalanTanpaJSX = () => {
    return React.createElement(
        'h1',
        null,
        'Hello World Tanpa JSX!'
    )
}

export {PengenalanJSX, PengenalanTanpaJSX}