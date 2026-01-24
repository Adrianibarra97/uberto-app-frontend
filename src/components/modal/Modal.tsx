import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
