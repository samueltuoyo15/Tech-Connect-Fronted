import {Toaster} from "sonner"
export const ToasterComponent = () => {
  return(
    <Toaster 
  position="top-center"
  theme="light"
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
/>
    )
}