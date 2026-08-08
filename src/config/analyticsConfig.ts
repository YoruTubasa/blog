import type { AnalyticsConfig } from "../types/analyticsConfig";

export const analyticsConfig: AnalyticsConfig = {
	// Google Analytics ID
	googleAnalyticsId: "",
	// Microsoft Clarity ID
	microsoftClarityId: "",
	// Umami 统计配置(留空则不启用)
	umamiAnalytics: {
		websiteId: "",
		shareId: "",
		scriptUrl: "",
		trackOutboundLinks: false,
		collectWebVitals: false,
		pageviews: {
			enabled: false,
		},
	},
};
