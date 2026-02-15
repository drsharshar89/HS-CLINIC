import { Component, ReactNode, ErrorInfo } from 'react';
import { Box } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Lightweight error boundary for 3D scenes.
 * Falls back to a static placeholder instead of crashing the page.
 */
export class Scene3DErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[3D Scene] Component crashed, showing fallback:', error.message, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="border-gold-400/10 bg-dark-900/40 flex h-96 flex-col items-center justify-center gap-4 rounded-2xl border">
          <Box className="text-gold-400/30 h-12 w-12" />
          <p className="font-mono text-sm text-gray-500">3D Preview Unavailable</p>
        </div>
      );
    }
    return this.props.children;
  }
}
