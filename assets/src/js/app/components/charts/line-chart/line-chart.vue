<template>
    <div class="line-chart">
        <div ref="chart"/>
    </div>
</template>

<script>
    import ApexCharts from 'apexcharts';
    import { SITE_OVERVIEW_CHART } from '../../../config/chart-options';

    export default {
        props: {
            dataSets: {
                type: Array,
                required: true,
            },
            labels: {
                type: Array,
                required: true,
            },
            options: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                chart: null,
            };
        },

        methods: {
            buildChart() {
                const options = Object.assign({}, SITE_OVERVIEW_CHART, this.options);
                this.chart = new ApexCharts(this.$refs.chart, options);
                this.chart.render();
                this.updateChart();
            },

            updateChart() {
                this.chart.updateOptions({
                    xaxis: {
                        categories: this.labels,
                    },
                });
                this.chart.updateSeries(this.dataSets);
            },
        },

        watch: {
            dataSets() {
                this.updateChart();
            },
            labels() {
                this.updateChart();
            },
        },

        mounted() {
            this.buildChart();
        },
    };
</script>
