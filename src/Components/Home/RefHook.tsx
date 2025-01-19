import React, { useEffect, useRef } from 'react'

export default function RefHook() {
    const inputRef = useRef<HTMLInputElement>(null!)
    console.log('inputRef',inputRef)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}
