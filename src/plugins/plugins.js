/* eslint-disable global-require */

import * as Vision from '@hapi/vision';
import blipp from 'blipp';
import HapiSwagger from 'hapi-swagger';
import laabr from 'laabr';

import { name, version } from '../../package.json';

export default {
    dev: [
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: name,
                    version: version,
                },
                tags: [
                    { name: 'auth', description: 'Auth API' },
                    { name: 'health', description: 'Health API' },
                    { name: 'reports', description: 'Reports API' },
                ],
            },
        },
        { plugin: blipp, options: { showAuth: true } },
        { plugin: laabr, options: {} },
    ],
    prod: [],
};
