import React from 'react';
import { Code, ExternalLink, FolderGit2 } from 'lucide-react';
import type { Section as SectionType } from '../types';
import { Section } from './Section';

interface ProjectsProps {
    data: SectionType;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
    if (!data.visible || !data.items) return null;

    return (
        <Section title={data.name} icon={Code}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.items.map((item, index) => (
                    item.visible && (
                        <div
                            key={item.id}
                            className="flex flex-col h-full bg-surface border border-border rounded-xl p-6 hover:border-primary transition-smooth hover-lift shadow-sm hover:shadow-xl animate-scale-in group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-background rounded-lg text-primary group-hover:bg-surface-highlight transition-smooth group-hover:scale-110">
                                    <FolderGit2 size={24} />
                                </div>
                                {item.url?.href && (
                                    <a
                                        href={item.url.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-muted hover:text-primary transition-smooth hover:scale-125"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-smooth">
                                {item.name}
                            </h3>

                            <p className="text-sm text-text-muted mb-4 italic">
                                {item.description}
                            </p>

                            {item.summary && (
                                <div
                                    className="prose prose-sm text-text-muted mb-6 prose-ul:list-disc prose-ul:pl-4 prose-li:mb-1 prose-strong:text-text-main"
                                    dangerouslySetInnerHTML={{ __html: item.summary }}
                                />
                            )}

                            {item.keywords && item.keywords.length > 0 && (
                                <div className="mt-auto pt-4 border-t border-border flex flex-wrap gap-2">
                                    {item.keywords.map((keyword, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-medium text-text-muted bg-background px-2.5 py-1 rounded-md border border-border hover:border-primary hover:text-primary transition-smooth hover:scale-105 cursor-default"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                ))}
            </div>
        </Section>
    );
};
