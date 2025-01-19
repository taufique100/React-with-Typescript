import React from 'react'


type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type TosterProps = {
    position: 
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> 
    | 'center'
}

export default function Toster({position}: TosterProps) {

  return (<div>Toast Notification Position - {position}</div> )
}
