import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import type { Basics, Section } from '../types';

interface HeaderProps {
    basics: Basics;
    profiles: Section;
}

export const Header: React.FC<HeaderProps> = ({ basics, profiles }) => {
    return (
        <header className="mb-16 pt-8">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-text-main mb-6 animate-fade-in">
                {basics.name}
            </h1>
            <p className="text-xl sm:text-2xl text-text-muted mb-8 max-w-3xl leading-relaxed animate-fade-in delay-100">
                {basics.headline}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-text-muted mb-8 animate-fade-in delay-200">
                {basics.email && (
                    <a href={`mailto:${basics.email}`} className="flex items-center gap-2 hover:text-primary transition-smooth hover:scale-105">
                        <Mail size={18} />
                        {basics.email}
                    </a>
                )}
                {basics.phone && (
                    <span className="flex items-center gap-2">
                        <Phone size={18} />
                        {basics.phone}
                    </span>
                )}
                {basics.location && (
                    <span className="flex items-center gap-2">
                        <MapPin size={18} />
                        {basics.location}
                    </span>
                )}
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                {profiles.visible && profiles.items && profiles.items.map((profile) => (
                    profile.visible && profile.url && (
                        <a
                            key={profile.id}
                            href={profile.url.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-main hover:border-primary hover:text-primary transition-smooth shadow-sm hover:shadow-md hover:scale-105"
                        >
                            {profile.network === 'Github' && <Github size={20} />}
                            {profile.network === 'LinkedIn' && <Linkedin size={20} />}
                            <span className="font-medium">{profile.network}</span>
                        </a>
                    )
                ))}
            </div>
        </header>
    );
};
