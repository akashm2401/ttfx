import React from 'react';
import './SpinnerComponent.scss'

export default function SpinnerComponent() {
  return (
    <div className="spinner">
        {/* Spinner markup, for example: */}
          <div className="lds-roller">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
