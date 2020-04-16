import CONFIG from '../../../../config/dashboard';
import { getLatestReportBySiteId } from '../db/reports';
import { getFavoriteSites } from '../../sites/db/sites';
import reportsToBarChart from '../../../transformer/report-to-bar-chart';

/**
 * Get overview over projects by specific timing id
 * @return {Promise<BarChartData>}
 */
export default async function getSpeedReportOverview(request) {
    const pages = await getFavoriteSites(request.mongo.db);
    const labels = pages.map((p) => p.name);

    const reports = [];
    for (let p = 0; p < pages.length; p++) {
        const report = await getLatestReportBySiteId(request.mongo.db, pages[p].id);
        if (!report) {
            continue;
        }
        reports.push(report);
    }

    return reportsToBarChart(reports, labels, CONFIG.DASHBOARD.favoriteProjectsComparison.fields);
}
