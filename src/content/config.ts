import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author:      z.string().default('KTM Agency'),
    category:    z.enum(['Web Design', 'SEO', 'Google Ads', 'Facebook Ads', 'App Development', 'Digital Marketing']),
    tags:        z.array(z.string()).default([]),
    image:       z.string().optional(),
    imageAlt:    z.string().optional(),
    featured:    z.boolean().default(false),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title:         z.string(),
    client:        z.string(),
    description:   z.string(),
    serviceType:   z.enum(['Web Design', 'Web Development', 'App Development', 'SEO', 'Google Ads', 'Facebook Ads']),
    industry:      z.string(),
    completedDate: z.coerce.date(),
    image:         z.string().optional(),
    imageAlt:      z.string().optional(),
    results:       z.array(z.string()).default([]),
    technologies:  z.array(z.string()).default([]),
    featured:      z.boolean().default(false),
    liveUrl:       z.string().optional(),
  }),
});

export const collections = { blog, portfolio };
