import { version, name } from '../../package.json';

const DEFAULT_PARAMS = {
    G_ANALYTICS_ID: process.env.G_ANALYTICS_ID || false,
    TITLE: name,
    VERSION: version,
};

const basicViewHandler = (request, h) => h.view('views/index.twig', { ...DEFAULT_PARAMS });

export default [
    {
        method: 'GET',
        path: '/',
        options: {
            description: 'Main entry point',
            auth: false,
        },
        handler: basicViewHandler,
    },

    {
        method: 'GET',
        path: '/login',
        options: {
            description: 'Main entry point',
            auth: false,
        },
        handler: basicViewHandler,
    },

    {
        method: 'GET',
        path: '/app/',
        options: {
            description: 'Main entry point',
            auth: false,
        },
        handler: basicViewHandler,
    },
    {
        method: 'GET',
        path: '/app',
        options: {
            description: 'Main entry point',
            auth: false,
        },
        handler: basicViewHandler,
    },

    {
        method: 'GET',
        path: '/app/dashboard',
        options: {
            description: 'Dashboard page',
            auth: false,
        },
        handler: basicViewHandler,
    },

    {
        method: 'GET',
        path: '/app/overview',
        options: {
            description: 'Overview page',
            auth: false,
        },
        handler: basicViewHandler,
    },

    {
        method: 'GET',
        path: '/app/projects',
        options: {
            description: 'List of projects',
            auth: false,
        },
        handler: basicViewHandler,
    },

    {
        method: 'GET',
        path: '/app/projects/{id}',
        options: {
            description: 'Details of project',
            auth: false,
        },
        handler: basicViewHandler,
    },

    {
        method: 'GET',
        path: '/app/system',
        options: {
            description: 'Show system infos',
            auth: false,
        },
        handler: basicViewHandler,
    },
];
