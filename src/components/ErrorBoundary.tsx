import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  readonly children: ReactNode;
  readonly fallback?: ReactNode;
}

interface State {
  readonly hasError: boolean;
  readonly error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <section className="section">
            <div className="container">
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '16px'
              }}>
                <h2 style={{ color: '#f87171', marginBottom: '16px' }}>
                  Something went wrong
                </h2>
                <p style={{ color: '#cbd5e1', marginBottom: '24px' }}>
                  An unexpected error occurred. Please refresh the page or try again later.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn btn--primary"
                  style={{
                    background: '#38bdf8',
                    color: '#0f172a',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </section>
        )
      );
    }

    return this.props.children;
  }
}
