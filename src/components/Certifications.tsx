import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import type { Section as SectionType } from '../types';
import { Section } from './Section';

interface CertificationsProps {
    data: SectionType;
}

export const Certifications: React.FC<CertificationsProps> = ({ data }) => {
    if (!data.visible || !data.items) return null;

    return (
        <Section title={data.name} icon={Award}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.items.map((item, index) => (
                    item.visible && (
                        <div
                            key={item.id}
                            className="flex flex-col justify-between p-5 bg-surface rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-text-main mb-1">
                                    {item.url?.href ? (
                                        <a href={item.url.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth">
                                            {item.name}
                                            <ExternalLink size={16} className="hover:scale-125 transition-smooth" />
                                        </a>
                                    ) : (
                                        item.name
                                    )}
                                </h3>
                                <div className="text-text-muted">
                                    {item.issuer}
                                </div>
                            </div>
                            {item.date && (
                                <div className="flex items-center gap-2 text-sm text-text-muted font-mono mt-4 pt-4 border-t border-border">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>
                            )}
                        </div>
                    )
                ))}
            </div>
        </Section>
    );
};
