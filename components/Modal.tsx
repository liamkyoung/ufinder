import React from 'react'

type Props = {
  title: string
  subtitle: string
}

function Modal({ title, subtitle }: Props) {
  return (
    <div>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{subtitle}</p>
          <div className="modal-action">
            <button className="btn btn-error">
              <a href="#">Block</a>
            </button>
            <button className="btn btn-info">
              <a href="#">Go Back</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
