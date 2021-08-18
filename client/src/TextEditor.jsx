import React, { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
]

export default function TextEditor() {
  // const wrapperRef = useRef()

  useEffect(() => {
    // const editor = document.createElement('div')
    // wrapperRef.current.append(editor)
    new Quill('.container', {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS },
    })
    // return () => {
    // wrapperRef.innerHTML = ''
    // }
  }, [])
  return <div className="container"></div>
}
