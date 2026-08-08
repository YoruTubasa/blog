export interface AnalyticsConfig {
	googleAnalyticsId: string;
	microsoftClarityId: string;
	umamiAnalytics: {
		websiteId: string;
		shareId: string;
		scriptUrl: string;
		trackOutboundLinks: boolean;
		collectWebVitals: boolean;
		pageviews: {
			enabled: boolean;
		};
	};
}
