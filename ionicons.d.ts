import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name?: string;
        class?: string;
        size?: string;
        suppressHydrationWarning?: boolean;
      };
    }
  }
}
