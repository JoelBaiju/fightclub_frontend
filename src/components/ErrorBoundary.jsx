import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state so the next render shows the fallback UI.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // You can also log the error to an error reporting service.
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary: ", error, errorInfo);
    // Send error details to an external logging service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return 
      <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
