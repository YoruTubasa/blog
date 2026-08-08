import type { FooterConfig } from "../types/config";

export const footerConfig: FooterConfig = {
	// 社交链接（mailto:/tel: 开头的链接不会在新标签打开）
	socialLinks: [
		{
			label: "GitHub",
			href: "https://github.com/YoruTubasa",
			icon: "fa7-brands:github",
		},
		{
			label: "QQ",
			href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4QFJTrPMhbo1QEdGzYO95jPbdWfY4l_a&authKey=%2FHgwd9lDqiYz0s6QlKdAnDCdYVuEOW5FZPa1%2FqgcoaVwL3vxeT5P7Ysj%2FBE9GTs0&noverify=0&group_code=1046678455",
			icon: "fa7-brands:qq",
		},
		{
			label: "邮箱",
			href: "mailto:yorutubasa@gmail.com",
			icon: "material-symbols:mail",
		},
	],

	// 备案信息（icp/police 留空则不显示对应条目）
	beian: {
		icp: "粤ICP备2026073665号-1",
		police: "粤公网安备44060602003342号",
		policeIcon: "/assets/images/备案图标.png",
		icpUrl: "https://beian.miit.gov.cn/#/Integrated/index",
		policeUrl: "https://beian.mps.gov.cn/#/query/webSearch?code=44060602003342",
	},

	// Powered by 信息
	poweredBy: [
		{ label: "框架", name: "Astro", href: "https://astro.build" },
		{
			label: "主题",
			name: "Firefly",
			href: "https://github.com/YoruTubasa/Firefly",
		},
	],
};
