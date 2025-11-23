import React, { useState } from 'react';
import { Menu, X, Download, Home } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
    { name: 'Summary', href: '#summary' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/harshal_nikhare_resume.pdf';
        link.download = 'Harshal_Nikhare_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-slide-down">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Home */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center justify-center w-10 h-10 text-text-main hover:text-primary transition-smooth rounded-lg hover:bg-surface hover:scale-110">
                            <Home size={24} />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="px-3 py-2 text-sm font-medium text-text-muted hover:text-primary transition-smooth rounded-lg hover:bg-surface hover:scale-105"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side - Theme Toggle & Download */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="/harshal_nikhare_resume.pdf"
                            download="Harshal_Nikhare_Resume.pdf"
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg hover:opacity-90 transition-smooth shadow-sm hover:shadow-md font-medium text-sm hover:scale-105"
                        >
                            <Download size={16} />
                            <span>Resume</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-text-main hover:bg-surface transition-smooth hover:scale-110"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-slide-down">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="block px-3 py-2 text-base font-medium text-text-muted hover:text-primary hover:bg-surface rounded-lg transition-smooth"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/harshal_nikhare_resume.pdf"
                            download="Harshal_Nikhare_Resume.pdf"
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-3 py-2 mt-2 bg-primary text-background rounded-lg hover:opacity-90 transition-smooth font-medium"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
