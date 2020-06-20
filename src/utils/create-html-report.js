import ReportGenerator from 'lighthouse/lighthouse-core/report/report-generator';

/**
 * Create html from report
 * @param report
 * @return {string}
 */
export default function createHTMLReport(report) {
    return ReportGenerator.generateReport(JSON.parse(report.raw), 'html')
}
