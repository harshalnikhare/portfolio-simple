import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionProps {
    title: string;
    icon?: LucideIcon;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, icon: Icon, children, className = '' }) => {
    return (
        <section className={`mb-20 ${className}`}>
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                {Icon && <Icon className="text-primary" size={28} />}
                <h2 className="text-3xl font-bold text-text-main">
                    {title}
                </h2>
            </div>
            {children}
        </section>
    );
};
