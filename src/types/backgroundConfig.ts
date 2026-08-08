export interface BackgroundConfig {
	enabled: boolean;
	desktop: string | string[];
	mobile: string | string[];
	size: "cover" | "contain";
	position: "center" | "top" | "bottom";
}
