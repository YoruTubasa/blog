import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	items: [
		{
			tag: "公告",
			title: "公告",
			content: "本站的文章由AI代笔，如有疏漏请在评论区补充或者联系站长",
			time: "2026-08-09",
			sort: 2,
		},
		{
			tag: "欢迎",
			title: "欢迎",
			content: "欢迎来到夜翼玖的博客",
			time: "2026-08-09",
			sort: 1,
		},
	],
	closable: true,
};
