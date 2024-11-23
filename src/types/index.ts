// src/types/index.ts

/**
 * Base interface for content items (components and demos)
 */
export interface BaseItem {
    title: string;
    titleJa: string;
    description: string;
    descriptionJa: string;
    href: string;
    tags: string[];
    icon: string;
}

/**
 * Interface for component items
 */
export interface Component extends BaseItem {
    type: 'component';
}

/**
 * Interface for demo items
 */
export interface Demo extends BaseItem {
    type: 'demo';
}

/**
 * Union type for all content items
 */
export type ContentItem = Component | Demo;

// Additional type utilities if needed
export const isComponent = (item: ContentItem): item is Component => item.type === 'component';
export const isDemo = (item: ContentItem): item is Demo => item.type === 'demo';