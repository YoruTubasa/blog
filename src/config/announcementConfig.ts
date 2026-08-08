import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告列表
	items: [
		{
			tag: "欢迎",
			title: "欢迎来访",
			content:
				"欢迎来到夜翼玖的小站！这里记录生活日常、番剧游戏和折腾笔记，欢迎留言交流～",
			time: "2026-08-09",
			link: "/about/",
			sort: 1,
		},
		{
			tag: "友链",
			title: "互换友链",
			content: "欢迎互换友链，要求原创内容、稳定更新、支持 HTTPS。",
			time: "2026-08-09",
			link: "/friends/",
			sort: 2,
		},
	],

	// 是否允许用户关闭公告
	closable: true,
};
