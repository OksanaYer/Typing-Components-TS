// components/Alert.tsx
// This component should receive `message` (string) and possible alert are "info", "warn","error"
// If the application is in development mode, output the message to he console as well using the appropriate method
import React from "react";
type AlertProps = {
  message: string;
  type: "info"|"warn"|"error";
}

const Alert=({ message, type }: AlertProps):React.JSX.Element =>{
  if (import.meta.env.MODE === "development") {
    switch (type) {
      case "info":
        console.info(message);
        break;
      case "warn":
        console.warn(message);
        break;
      case "error":
        console.error(message);
        break;
      default:
        console.log(message);
    }
  }

  const baseStyle: React.CSSProperties = {
    padding: "12px 16px",
    borderRadius: "6px",
    color: "white",
    fontSize: "16px",
    marginBottom: "10px",
  };

  const typeStyles: Record <string, React.CSSProperties> = {
    info: {
      backgroundColor: "#2196f3",
    },
    warn: {
      backgroundColor: "#ff9800",
    },
    error: {
      backgroundColor: "#f44336",
    },
  };

  
  return <div style={{... baseStyle, ... typeStyles[type]}} className={`alert ${type}`}>{message}</div>;
};

export default Alert;
