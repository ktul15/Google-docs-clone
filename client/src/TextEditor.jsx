import React, { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default function TextEditor() {
  // const wrapperRef = useRef()

  useEffect(() => {
    // const editor = document.createElement('div')
    // wrapperRef.current.append(editor)
    new Quill('#container', { theme: 'snow' })
    // return () => {
    // wrapperRef.innerHTML = ''
    // }
  }, [])
  return <div id="container"></div>
}
