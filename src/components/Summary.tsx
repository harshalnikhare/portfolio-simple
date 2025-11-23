import React from 'react';
import { User } from 'lucide-react';
import type { Section as SectionType } from '../types';
import { Section } from './Section';

interface SummaryProps {
    data: SectionType;
}

export const Summary: React.FC<SummaryProps> = ({ data }) => {
    if (!data.visible || !data.content) return null;

    return (
        <Section title={data.name} icon={User} className="mb-16">
            <div
                className="text-xl text-text-muted leading-relaxed prose prose-lg max-w-none prose-p:my-4 prose-strong:text-text-main prose-strong:font-bold animate-fade-in"
                dangerouslySetInnerHTML={{ __html: data.content }}
            />
        </Section>
    );
};
