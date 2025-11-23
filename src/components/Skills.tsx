import React from 'react';
import { Wrench, Cpu, Database, Globe, Terminal, Cloud } from 'lucide-react';
import type { Section as SectionType } from '../types';
import { Section } from './Section';

interface SkillsProps {
    data: SectionType;
}

const getIconForSkill = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('frontend') || lower.includes('web')) return Globe;
    if (lower.includes('backend') || lower.includes('server')) return Database;
    if (lower.includes('cloud') || lower.includes('aws')) return Cloud;
    if (lower.includes('tools') || lower.includes('devops')) return Terminal;
    if (lower.includes('language')) return CodeIcon;
    return Cpu;
};

// Helper since Code is already used in Projects
const CodeIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

export const Skills: React.FC<SkillsProps> = ({ data }) => {
    if (!data.visible || !data.items) return null;

    return (
        <Section title={data.name} icon={Wrench}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.items.map((item, index) => {
                    const Icon = getIconForSkill(item.name || '');
                    return (
                        item.visible && (
                            <div
                                key={item.id}
                                className="bg-surface rounded-xl p-5 border border-border hover:border-primary transition-smooth hover:shadow-lg animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-background rounded-lg text-text-main transition-smooth hover:scale-110 hover:text-primary">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-text-main">
                                        {item.name}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {item.keywords && item.keywords.map((keyword, idx) => (
                                        <span
                                            key={idx}
                                            className="text-sm text-text-muted bg-background px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-smooth hover:scale-105 cursor-default"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    );
                })}
            </div>
        </Section>
    );
};
