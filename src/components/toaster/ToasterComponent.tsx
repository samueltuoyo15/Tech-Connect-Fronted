import {Toaster} from "sonner"
export const ToasterComponent = () => {
  return(
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <Toaster 
  toastOptions={{
    style: {
      background: "#1E293B", 
      color: "#FFFFFF", 
      borderRadius: "8px",
      border: "1px solid #3B82F6", 
      padding: "12px",
    },
    success: {
      style: {
        background: "#10B981", 
        color: "#FFFFFF",
      },
    },
    error: {
      style: {
        background: "#EF4444", 
        color: "#FFFFFF",
      },
    },
  }}
/></div>
    )
}