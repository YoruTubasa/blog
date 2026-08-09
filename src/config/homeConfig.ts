import type { HomeConfig } from "../types/config";

export const homeConfig: HomeConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "/assets/images/avatar.webp",

	// 上班时间头像（为空则使用上方 avatar）
	avatarOnWork: "",

	// 下班时间头像（为空则始终使用上方 avatar）
	avatarOffWork: "",

	// 名字
	name: "夜翼玖",

	// 首页展示名字（留空则使用 name）
	displayName: "夜翼玖",

	// 名字右侧徽章文字（如 QQ 号）
	nameBadge: "QQ：3092938478",

	// 职业/身份标签
	occupation: "ACG 爱好者 / 「伪」独立博主",

	// 个人签名（支持多条，会循环打字+删除效果）
	bio: ["Hello,I'm YoruTubasa."],

	hero: {
		backgroundImage: "https://t.alcy.cc/pc",
		backgroundImageMobile: "https://t.alcy.cc/mp",
		speechAccentImage: "/assets/images/home/home2-1.webp",
		// galgame 对话框（写死暗黑主题）。内容全部由此驱动，可自由增删
		dialogue: {
			enabled: true,
			speakers: {
				host: "夜翼玖",
				visitor: "访客",
			},
			menuTitle: "想聊点什么？",
			typingSpeed: 45,
			autoDelay: 1600,
			// 默认逐句播放的简介，末句后弹出话题菜单
			intro: [
				{ speaker: "host", text: "欸——来客人了，随便坐～" },
				{ speaker: "host", text: "这里是夜翼玖的小站，欢迎来玩～" },
				{ speaker: "host", text: "对了，先自我介绍一下：Hello, I'm YoruTubasa." },
				{ speaker: "host", text: "想打听点啥？戳戳下面的话题聊聊吧～" },
			],
			// 话题菜单：点击进入逐句对话，末句后返回菜单
			topics: [
				{
					title: "关于我",
					lines: [
						{ speaker: "visitor", text: "你是谁呀？" },
						{ speaker: "host", text: "我是夜翼玖（YoruTubasa），一个在数字世界里四处游荡的普通 ACG 爱好者。" },
						{ speaker: "visitor", text: "平时都喜欢做些什么？" },
						{ speaker: "host", text: "看番、打游戏，偶尔折腾各种有趣的东西——比如这个博客就是我自己搭的。" },
						{ speaker: "host", text: "想交流的话可以加群，或者发邮件给我～" },
					],
				},
				{
					title: "博客特色",
					lines: [
						{ speaker: "visitor", text: "这个博客有什么特色？" },
						{ speaker: "host", text: "Astro + Firefly 魔改主题，黑白极简风，加载快，还有 Twikoo 评论和音乐播放器。" },
						{ speaker: "host", text: "以后会慢慢记录生活日常、番剧游戏和折腾笔记。" },
						{ speaker: "host", text: "慢慢逛，欢迎留下你的评论～" },
					],
				},
			],
		},
		rightPanel: {
			pill: "BLOG",
			title: "博客",
			diamond: "✦",
			microText: "システム起動完了",
		},
		// 玻璃雨珠 + 撞击水花（仅桌面端生效，自动尊重 prefers-reduced-motion）
		rain: {
			enabled: true,
			intensity: 0.6,
			// 留空则随主题自动取色（暗色→白 / 浅色→深灰）；也可填 "#7fb0ff" 或 "127,176,255"
			color: "#ffffff",
		},
	},

	dataLayer: {
		visitImage: "/assets/images/home/home-data-1.webp",
		archiveImage: "/assets/images/home/home-data-2.webp",
		contactImage: "/assets/images/home/home-data-3.webp",
		skillsImage: "/assets/images/home/home-data-4.webp",
	},

	// 展示层：垂直线 → 长柱 → 字体显隐 → 柱子扩全屏 → 衔接百叶窗
	displayLayer: {
		enabled: true,
		kicker: "作品展示",
		title: "CRYSTALLIZE GALLERY",
		description:
			"Where fleeting visions crystallize into permanence — each frame a frozen breath of time, each work a memory hardened into light.",
		scrollDistance: 4000,
		pillarFinalWidth: "18vw",
		emitterImage: "/assets/images/home-truncated/td.webp",
	},

	portfolioShutter: {
		enabled: true,
		kicker: "The End",
		title: "愿你每一天 都闪闪发光",
		description: "岁岁常欢愉，万事皆胜意",
		scrollDistance: 3000,
		finalImage: {
			midgroundImage: "/assets/images/home-truncated/utl-back1.webp",
			backgroundVideo: "/assets/images/home-truncated/utl-back2.webm",
			foregroundImage: "/assets/images/home-truncated/utl-1.webp",
			alt: "2026年 加油！",
		},
		interlude: {
			foreground: "/assets/images/home-truncated/b-1.webp",
			stripLeft: "/assets/images/home-truncated/b-2.webp",
			stripRight: "/assets/images/home-truncated/b-3.webp",
			copyLeft: "夜翼",
			copyRight: "玖",
		},
		panels: [
			{
				title: "外部站点",
				english: "PROJECTS",
				description: "博客主站 · 文章与随想",
				image: "/assets/images/home-truncated/1.webp",
				alt: "外部站点",
			},
			{
				title: "术业专攻",
				english: "SPECIALITIES",
				description: "生活日常 · ACG · 折腾笔记",
				image: "/assets/images/home-truncated/2.webp",
				alt: "术业专攻",
			},
			{
				title: "博客特色",
				english: "BLOG FEATURES",
				description: "Twikoo 评论 · 音乐播放 · 极简体验",
				image: "/assets/images/home-truncated/3.webp",
				alt: "博客特色",
			},
			{
				title: "站点技术",
				english: "STACK",
				description: "Astro · 黑白极简 · 快速加载",
				image: "/assets/images/home-truncated/4.webp",
				alt: "站点技术",
			},
			{
				title: "相册收录",
				english: "PHOTO ALBUM",
				description: "相册收录 · 精彩瞬间",
				image: "/assets/images/home-truncated/5.webp",
				alt: "相册收录",
			},
		],
	},

	// 首页技能图标
	skills: [
		{ name: "Astro", icon: "simple-icons:astro", group: "Frontend" },
		{ name: "Svelte", icon: "simple-icons:svelte", group: "Frontend" },
		{ name: "TypeScript", icon: "simple-icons:typescript", group: "Language" },
		{ name: "React", icon: "simple-icons:react", group: "Frontend" },
		{ name: "Tailwind", icon: "simple-icons:tailwindcss", group: "Style" },
		{ name: "Java", icon: "mdi:language-java", group: "Backend" },
		{ name: "Python", icon: "simple-icons:python", group: "Language" },
		{ name: "Spring", icon: "simple-icons:spring", group: "Backend" },
		{ name: "Redis", icon: "simple-icons:redis", group: "Storage" },
		{ name: "MySQL", icon: "simple-icons:mysql", group: "Storage" },
		{ name: "MongoDB", icon: "simple-icons:mongodb", group: "Storage" },
		{ name: "RabbitMQ", icon: "simple-icons:rabbitmq", group: "Backend" },
		{ name: "Docker", icon: "simple-icons:docker", group: "DevOps" },
		{ name: "Linux", icon: "simple-icons:linux", group: "DevOps" },
		{ name: "Nginx", icon: "simple-icons:nginx", group: "DevOps" },
	],

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4QFJTrPMhbo1QEdGzYO95jPbdWfY4l_a&authKey=%2FHgwd9lDqiYz0s6QlKdAnDCdYVuEOW5FZPa1%2FqgcoaVwL3vxeT5P7Ysj%2FBE9GTs0&noverify=0&group_code=1046678455",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/YoruTubasa",
			showName: false,
		},
		{
			name: "站内留言",
			icon: "material-symbols:chat-rounded",
			url: "/guestbook/",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
