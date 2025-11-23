import React from 'react';
import { Trophy, Calendar } from 'lucide-react';
import type { Section as SectionType } from '../types';
import { Section } from './Section';

interface AwardsProps {
    data: SectionType;
}

export const Awards: React.FC<AwardsProps> = ({ data }) => {
    if (!data.visible || !data.items) return null;

    return (
        <Section title={data.name} icon={Trophy}>
            <div className="space-y-4">
                {data.items.map((item, index) => (
                    item.visible && (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-5 bg-surface rounded-xl border border-primary/30 hover:border-primary transition-smooth hover:shadow-lg hover:shadow-primary/10 animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div>
                                <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                                    {item.title}
                                </h3>
                                <div className="text-text-main font-medium mt-1">
                                    {item.awarder}
                                </div>
                                {item.summary && (
                                    <div
                                        className="text-sm text-text-muted mt-2"
                                        dangerouslySetInnerHTML={{ __html: item.summary }}
                                    />
                                )}
                            </div>
                            {item.date && (
                                <div className="flex items-center gap-2 text-sm text-primary font-mono mt-4 sm:mt-0 bg-background px-3 py-1 rounded-full border border-primary/30">
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
