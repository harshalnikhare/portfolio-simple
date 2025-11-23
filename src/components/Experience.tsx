import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import type { Section as SectionType } from '../types';
import { Section } from './Section';

interface ExperienceProps {
    data: SectionType;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
    if (!data.visible || !data.items) return null;

    return (
        <Section title={data.name} icon={Briefcase}>
            <div className="relative border-l-2 border-border ml-3 space-y-12">
                {data.items.map((item, index) => (
                    item.visible && (
                        <div
                            key={item.id}
                            className="relative pl-8 group animate-fade-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:scale-125 transition-smooth" />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-smooth">
                                    {item.position}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-text-muted font-mono mt-1 sm:mt-0">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6">
                                <div className="text-lg font-medium text-text-main">
                                    {item.url?.href ? (
                                        <a href={item.url.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth hover:scale-105 inline-flex">
                                            {item.company}
                                            <ExternalLink size={14} />
                                        </a>
                                    ) : (
                                        item.company
                                    )}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-text-muted mt-1 sm:mt-0">
                                    <MapPin size={14} />
                                    {item.location}
                                </div>
                            </div>

                            {item.summary && (
                                <div
                                    className="prose prose-lg text-text-muted max-w-none prose-ul:list-disc prose-ul:pl-4 prose-li:mb-2 prose-strong:text-text-main"
                                    dangerouslySetInnerHTML={{ __html: item.summary }}
                                />
                            )}
                        </div>
                    )
                ))}
            </div>
        </Section>
    );
};
