import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';
import { BLOGS } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aarnainfradevelopers.com';

  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/openplots',
    '/farmlands',
    '/villas-houses',
    '/apartments',
    '/services',
    '/hmda-master-plan',
    '/blogs',
    '/career',
    '/channel-partner',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOGS.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}

