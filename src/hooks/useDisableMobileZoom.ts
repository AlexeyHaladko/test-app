import React, {type ComponentType, type FC, useEffect} from 'react';

export function withDisableMobileZoom<P extends object>(Wrapped: ComponentType<P>): ComponentType<P> {
    const ComponentWithNoZoom: FC<P> = (props: P) => {

        useEffect(() => {
            // iOS pinch
            const prevent = (e: Event) => e.preventDefault();
            document.addEventListener('gesturestart', prevent as EventListener, {passive: false});
            document.addEventListener('gesturechange', prevent as EventListener, {passive: false});
            document.addEventListener('gestureend', prevent as EventListener, {passive: false});

            // double-tap
            let last = 0;
            const onTouchEnd = (e: TouchEvent) => {
                const now = Date.now();
                if (now - last <= 300) e.preventDefault();
                last = now;
            };
            document.addEventListener('touchend', onTouchEnd, {passive: false});

            return () => {
                document.removeEventListener('gesturestart', prevent as EventListener);
                document.removeEventListener('gesturechange', prevent as EventListener);
                document.removeEventListener('gestureend', prevent as EventListener);
                document.removeEventListener('touchend', onTouchEnd);
            };
        }, []);

        return React.createElement(Wrapped as React.ComponentType<P>, props);
    };
    ComponentWithNoZoom.displayName = `withDisableMobileZoom(${Wrapped.displayName || Wrapped.name || 'Component'})`;
    return ComponentWithNoZoom;
}
