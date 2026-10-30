import { Head } from '@inertiajs/react';
import { AboutCTA } from './components/about-cta';
import { AboutHero } from './components/about-hero';
import { AboutStats } from './components/about-stats';
import { AboutStory } from './components/about-story';
import { AboutValues } from './components/about-values';

export default function About() {
    return (
        <>
            <Head>
                <title>
                    About Us - PixelsFort Tech | Engineering Digital Excellence
                </title>
                <meta
                    name="description"
                    content="PixelsFort Tech Pvt. Ltd. is a modern software engineering company based in Kathmandu, Nepal. We architect custom enterprise platforms, cloud systems, web and mobile applications, and AI pipelines for high-growth leaders worldwide."
                />
                <meta
                    name="keywords"
                    content="PixelsFort, PixelsFort Tech, Software Company Nepal, Kathmandu Tech Studio, Custom Software Development, Cloud Architecture, DevOps Nepal, Web App Development"
                />
            </Head>

            {/* 1. Hero Section */}
            <AboutHero />

            {/* 2. Key Engineering Metrics Strip */}
            <AboutStats />

            {/* 3. Company Story, Mission & Vision */}
            <AboutStory />

            {/* 4. Core Values & Principles */}
            <AboutValues />

            {/* 5. Minimal CTA & Direct Contact */}
            <AboutCTA />
        </>
    );
}
