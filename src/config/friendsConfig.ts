import type { FriendLink, FriendsPageConfig } from "../types/config";

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,

	// 友链申请链接，填写后会在友链页面显示申请按钮
	// 使用模板参数直接跳转到友链申请模板
	applyLink:
		"https://github.com/YoruTubasa/blog/issues/new?template=friend-link.yml",

	// 本站信息，用于友链申请指南弹窗中的站点信息展示
	siteInfo: {
		name: "夜翼玖的博客",
		desc: "Hello,I'm YoruTubasa.",
		url: "https://yorutubasa.top",
		avatar: "https://q1.qlogo.cn/g?b=qq&nk=3092938478&s=640",
		email: "yorutubasa@gmail.com",
	},

	// 注意事项，用于友链申请指南弹窗中的注意事项展示
	notes: [
		{
			title: "互换原则",
			content: "请先将本站添加到您的友链页面，确认后会添加您的友链",
		},
		{
			title: "链接维护",
			content: "友链网站长期无法访问或内容违规，将会被移除",
		},
		{
			title: "内容要求",
			content: "内容积极向上，不含有任何含色情/反动/暴力等违法违规内容",
		},
		{
			title: "站点要求",
			content: "支持 HTTPS，以原创内容为主，能够正常访问且有持续更新",
		},
	],
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/withastro?s=200",
		desc: "现代化静态站点框架，构建更快、体验更好的网站",
		siteurl: "https://github.com/withastro/astro",
		tags: ["框架"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Firefly 文档",
		imgurl: "https://avatars.githubusercontent.com/CuteLeaf?s=200",
		desc: "简洁优雅的 Astro 博客主题文档",
		siteurl: "https://docs-firefly.cuteleaf.cn/zh/",
		tags: ["主题"],
		weight: 7,
		enabled: true,
	},
	{
		title: "MmzMing",
		imgurl: "https://tblog.mmzhiku.xyz/favicon/MyLogo.ico",
		desc: "MmzMing的博客",
		siteurl: "https://tblog.mmzhiku.xyz",
		tags: ["Blog"],
		weight: 6,
		enabled: true,
	},
	{
		title: "团子和蛋糕",
		imgurl: "https://blog.tsh520.cn/assets/ziyuan/tx.webp",
		desc: "如果你喜欢那么欢迎来到我的世界！",
		siteurl: "https://blog.tsh520.cn",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
	{
		title: "夜翼玖",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=3092938478&s=640",
		desc: "Hello,I'm YoruTubasa.",
		siteurl: "https://yorutubasa.top",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	// 权重降序；同权重时保留配置列表中的原始顺序
	return friends
		.map((friend, index) => ({ friend, index }))
		.sort((a, b) => b.friend.weight - a.friend.weight || a.index - b.index)
		.map(({ friend }) => friend);
};
