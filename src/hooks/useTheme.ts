import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            // Check local storage first
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }
            // Fallback to system preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'light'; // Default fallback
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove both classes first to ensure clean slate
        root.classList.remove('light', 'dark');

        // Add the active theme class
        root.classList.add(theme);

        // Save to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
}
