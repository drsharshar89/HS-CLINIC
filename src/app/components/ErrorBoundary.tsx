import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-6 border border-red-500">
            <h1 className="text-xl font-bold text-red-500 mb-4">Something went wrong</h1>
            <pre className="bg-gray-950 p-4 rounded text-sm font-mono overflow-auto mb-4 text-red-200">
              {this.state.error?.message}
            </pre>
            <p className="text-gray-400 text-sm">
              Please report this error to the developer.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
