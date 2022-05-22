import React from 'react'

import version from '../../version.js'

const Footer = () => {
    return (
        <>
            { /* Made in Germany :D */}
            <p
                align='center'
                display='block'
                style={{ margin: 0 }}
            >
                Made with ❤️ by <a href='https://spacehuhn.com' target='_blank' underline='hover' color='inherit'>Spacehuhn</a>
            </p>

            { /* Version */}
            <p
                align='center'
                display='block'
                style={{ margin: 0 }}
            >
                <a href='https://github.com/spacehuhntech/wifiduck' target='_blank' underline='hover' style={{ color: '#ccc' }}>
                    {version.name}
                </a>
            </p>
        </>
    )
}

export default Footer