// import React, { useState } from "react";

// const errorBoundary = ({ children }) => {
//   const [hasError, setHasError] = useState(false);

//   const componentDidCatch = (error, errorInfo) => {
//     console.error("Error caught by error boundary:", error, errorInfo);
//     setHasError(true);
//   };

//   if (hasError) {
//     // You can render a custom error message here
//     return <div>Something went wrong. Please try again later.</div>;
//   }

//   return children;
// };

// export default errorBoundary;
