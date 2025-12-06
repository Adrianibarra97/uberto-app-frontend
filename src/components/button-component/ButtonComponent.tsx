import './ButtonComponent.css'
import React from 'react'

interface ButtonComponentProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: React.ReactNode
}

export const ButtonComponent = ({
  type = 'submit',
  onClick,
  className = '',
  children = 'Search'
}: ButtonComponentProps) => {
  return (
    <div className='button-container'>
      <button
      type={type}
      className={`button-component ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
    </div> 
  )
}