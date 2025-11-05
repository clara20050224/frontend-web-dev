import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ChildrenProps = ({children}: Props) => {
  return (
    <>
        <h1>Children Props Example</h1>
        <p>{children}</p>
    </>
  )
}

export default ChildrenProps