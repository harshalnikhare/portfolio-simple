import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary selection:text-background transition-colors duration-300">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    );
};
