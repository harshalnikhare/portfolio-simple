import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import type { Section as SectionType } from '../types';
import { Section } from './Section';

interface EducationProps {
    data: SectionType;
}

export const Education: React.FC<EducationProps> = ({ data }) => {
    if (!data.visible || !data.items) return null;

    return (
        <Section title={data.name} icon={GraduationCap}>
            <div className="space-y-8">
                {data.items.map((item, index) => (
                    item.visible && (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:justify-between sm:items-start bg-surface p-6 rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div>
                                <h3 className="text-xl font-bold text-text-main mb-1">
                                    {item.institution}
                                </h3>
                                <div className="text-lg text-text-muted font-medium">
                                    {item.studyType} in {item.area}
                                </div>
                                {item.score && (
                                    <div className="text-sm text-text-muted mt-2">
                                        Score: <span className="font-semibold text-text-main">{item.score}</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-text-muted font-mono mt-4 sm:mt-0 bg-background px-3 py-1 rounded-full border border-border">
                                <Calendar size={14} />
                                {item.date}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </Section>
    );
};
