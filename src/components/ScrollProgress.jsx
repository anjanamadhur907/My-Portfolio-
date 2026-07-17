import { useState, useEffect, useRef } from 'react';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const containerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);

    useEffect(() => {
        let ticking = false;
        const calculateScrollProgress = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight;
                    const scrollTop = window.scrollY;

                    const scrollableHeight = documentHeight - windowHeight;
                    if (scrollableHeight <= 0) {
                        setScrollProgress(0);
                    } else {
                        const progress = (scrollTop / scrollableHeight) * 100;
                        setScrollProgress(progress);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        calculateScrollProgress();
        window.addEventListener('scroll', calculateScrollProgress, { passive: true });
        window.addEventListener('resize', calculateScrollProgress, { passive: true });

        return () => {
            window.removeEventListener('scroll', calculateScrollProgress);
            window.removeEventListener('resize', calculateScrollProgress);
        };
    }, []);

    const handleScrollTo = (clientY) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const relativeY = clientY - rect.top;
        const percentage = Math.min(Math.max(relativeY / rect.height, 0), 1);

        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollableHeight = documentHeight - windowHeight;

        window.scrollTo({
            top: percentage * scrollableHeight,
            behavior: 'auto' // Instant scroll response for dragging
        });
    };

    const handleMouseDown = (e) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        handleScrollTo(e.clientY);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
    };

    const handleTouchStart = (e) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        if (e.touches.length > 0) {
            handleScrollTo(e.touches[0].clientY);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDraggingRef.current) return;
            handleScrollTo(e.clientY);
        };

        const handleMouseUp = () => {
            if (isDraggingRef.current) {
                isDraggingRef.current = false;
                setIsDragging(false);
                document.body.style.userSelect = '';
                document.body.style.cursor = '';
            }
        };

        const handleTouchMove = (e) => {
            if (!isDraggingRef.current) return;
            if (e.touches.length > 0) {
                // Prevent default mobile viewport panning while dragging the scrollbar
                if (e.cancelable) e.preventDefault();
                handleScrollTo(e.touches[0].clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    const styles = {
        container: {
            position: 'fixed',
            // right: '1px',
            right: isMobile ? "1px" : "30px",
            top: '50%',
            transform: 'translateY(-50%)',
            width: '28px',
            height: '10vh',
            minHeight: '200px',
            maxHeight: '500px',
            zIndex: 9999,
            cursor: isDragging ? 'grabbing' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
        },
        track: {
            width: isHovered || isDragging ? '8px' : '7px',
            height: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            position: 'relative',
            transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease',
            backgroundClip: 'padding-box',
            overflow: 'hidden',
        },
        progress: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${scrollProgress}%`,
            background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple))',
            borderRadius: '10px',
            boxShadow: isHovered || isDragging
                ? '0 0 15px rgba(226, 165, 83, 0.8)'
                : '0 0 10px rgba(226, 165, 83, 0.4)',
            transition: 'box-shadow 0.25s ease',
        }
    };

    return (
        <div
            ref={containerRef}
            style={styles.container}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.track}>
                <div style={styles.progress}></div>
            </div>
        </div>
    );
}
