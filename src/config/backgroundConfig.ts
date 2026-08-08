import type { BackgroundConfig } from "../types/backgroundConfig";

// 背景壁纸配置
// src 支持三种格式:
// 1. 随机图 API 字符串: "https://t.alcy.cc/pc"
// 2. 单张图片: "/assets/images/bg.webp" 或 "assets/images/bg.webp"
// 3. 多图数组: ["/assets/images/bg1.webp", "/assets/images/bg2.webp"] 每次刷新随机
export const backgroundConfig: BackgroundConfig = {
	// 是否启用背景图(true=背景图, false=纯色背景跟随主题)
	enabled: false,
	// 桌面端背景(API 或图片)
	desktop: "https://t.alcy.cc/pc",
	// 移动端背景
	mobile: "https://t.alcy.cc/mp",
	// 背景图覆盖方式: cover | contain
	size: "cover",
	// 背景位置: center | top | bottom
	position: "center",
};
