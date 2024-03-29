import React from 'react'

const ClerkLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='flex items-center justify-center flex-col h-full'>{children}</div>
    )
}

export default ClerkLayout