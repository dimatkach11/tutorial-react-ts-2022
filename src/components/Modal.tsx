import { ReactNode } from "react"


interface ModalProps {
  children: ReactNode,
  title: string,
  onClose: () => void
}

export function Modal({children, title, onClose}: ModalProps) {
  return (
    <> {/* <> fragment */}
      <div className="fixed bg-black/50 top-0 left-0 right-0 bottom-0" onClick={onClose}/>
      <div 
        className="w-96 p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
        >
        <div className="text-2xl text-center mb-2 text-slate-600">{title}</div>
        {children}
      </div>
    </>
  )
}