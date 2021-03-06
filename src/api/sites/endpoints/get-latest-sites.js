import CONFIG from '../../../../config/server';
import { MEDIUM } from '../../../config/cache';
import { getLatestSites } from '../../../models/sites';
import { siteConfigModelList } from '../schemas/site-config-model';

export const getLatestSitesHandler = (request) => getLatestSites(request.mongo.db, CONFIG.api.entriesLimit);

export default {
    method: 'GET',
    path: '/api/sites/latest',
    handler: getLatestSitesHandler,
    options: {
        description: 'Get latest audited sites',
        tags: ['api', 'sites'],
        auth: 'jwt',
        response: {
            schema: siteConfigModelList,
        },
        cache: {
            expiresIn: MEDIUM,
            privacy: 'private',
        },
    },
};
