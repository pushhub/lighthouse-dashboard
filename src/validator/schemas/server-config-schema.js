import joi from '@hapi/joi';

export default joi.object({
    api: joi.object({
        siteReportLimit: joi
            .number()
            .min(1)
            .required(),
        entriesLimit: joi
            .number()
            .min(1)
            .required(),
    })
        .required(),

    db: joi.object({
        maxRawReports: joi
            .number()
            .min(1)
            .allow(null)
            .required(),

        maxReportsAge: joi
            .number()
            .min(0)
            .allow(false)
            .required(),
    }),

}).required();
