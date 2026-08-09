---
title: "LLBot:新一代 QQ 机器人框架"
published: 2026-08-09 16:33:00
description: "介绍 LLBot(幸运莉莉娅)——新一代 QQ 机器人框架:多平台部署、OneBot 11 协议、现代化 WebUI 管理界面,以及与 AstrBot 的联动方案。"
tags: ["LLBot", "机器人", "QQ", "OneBot", "开源"]
category: "技术"
lang: "zh_CN"
author: "夜翼玖"
comment: true
---

# LLBot:新一代 QQ 机器人框架

> LLBot,强大的 QQ 机器人框架,部署机器人更简单、更高效。

## 一、LLBot 是什么?

**LLBot(幸运莉莉娅 / Lucky Lillia Bot)** 是一款开源的 QQ 机器人框架。与传统的协议实现不同,LLBot 在提供稳定 QQ 接入能力的同时,更注重**部署体验**与**管理便利**——开箱即用、可视化配置,让搭建 QQ 机器人变得前所未有的简单。

如果说 NapCat 是"扎实的协议内核",那么 LLBot 就是"全家桶式的开箱体验"。

## 二、核心特性

| 特性 | 说明 |
|------|------|
| **多平台支持** | Windows / Linux 均可部署,桌面版与服务器都能跑 |
| **多种安装方式** | Desktop 版、CLI 版、Docker 镜像,按需选择 |
| **多协议兼容** | 完整支持 **OneBot 11**、Milky、Satori 协议 |
| **现代化 WebUI** | 漂亮的网页管理界面,可视化配置,无需手改文件 |
| **内置 WebQQ** | 内置 QQ 接入能力,一键安装、对接各种框架 |
| **API 完善** | 消息、群管、文件、表情等接口齐全 |
| **开源免费** | 完全开源,社区活跃 |

## 三、LLBot 与 AstrBot 联动

和你正在看的这个博客一样,由 **AstrBot** 驱动。接入 QQ 的常见方案之一就是搭配 LLBot:

```
LLBot(QQ 协议层)
    ↓ OneBot 11(WebSocket)
AstrBot(机器人框架层)
    ↓ 插件 / 大模型
智能对话、群管、订阅推送……
```

通过 LLBot 的**反向 WebSocket** 或**正向 WS**,AstrBot 可以轻松对接,实现群聊 AI 助手、自动回复、资讯推送等玩法。

## 四、部署实战

### Docker 方式(推荐,服务器环境)

```bash
# 拉取并启动 LLBot 容器
docker run -d --name llbot \
  -p 3001:3001 \
  -v /opt/llbot/data:/app/data \
  --restart always \
  llbot/llbot:latest
```

### CLI 方式

```bash
# 下载对应平台的 CLI 版本
./llbot start

# 打开浏览器访问 WebUI 进行配置
# 默认管理地址: http://localhost:3001
```

启动后在 **WebUI 中扫码登录 QQ**,配置 OneBot 11 的正向/反向 WebSocket 即可与机器人框架对接。

> 提示:正式使用建议开启**反向 WebSocket**,由框架主动连接,更安全稳定。

## 五、常见玩法

- **AI 聊天**:对接大模型,让机器人陪你聊天
- **群管理**:入群欢迎、关键词回复、定时提醒、禁言管理
- **资讯订阅**:番剧更新、新闻推送、天气查询
- **娱乐功能**:点歌、骰子、抽签、签到
- **个人助理**:待办、翻译、百科、OCR

## 六、小结

LLBot 凭借**多平台、多协议、可视化 WebUI** 的特点,成为搭建 QQ 机器人的优秀选择。无论你是想快速跑通一个机器人,还是构建复杂的自动化服务,LLBot 都能给你顺滑的体验。

**有了 LLBot,把想法变成机器人,真的只需要一杯咖啡的时间。**
