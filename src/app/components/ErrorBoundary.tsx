import React, { Component, ErrorInfo, ReactNode } from 'react';

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
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
          <div className="w-full max-w-md rounded-lg border border-red-500 bg-gray-800 p-6 shadow-xl">
            <h1 className="mb-4 text-xl font-bold text-red-500">Something went wrong</h1>
            <pre className="mb-4 overflow-auto rounded bg-gray-950 p-4 font-mono text-sm text-red-200">
              {this.state.error?.message}
            </pre>
            <p className="text-sm text-gray-400">Please report this error to the developer.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
