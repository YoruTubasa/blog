---
title: "Docker 入门与实践:从零理解容器化部署"
published: 2026-08-09 06:20:00
description: "一篇面向新手的 Docker 入门教程,涵盖核心概念、常用命令、数据卷、网络与 Docker Compose,附实战示例与避坑指南。"
tags: ["Docker", "容器", "教程", "Linux"]
category: "技术"
lang: "zh_CN"
author: "夜翼玖"
comment: true
---

# Docker 入门与实践:从零理解容器化部署

> 容器化已经成为现代运维和开发不可或缺的技能。本文从零开始,带你理解 Docker 的核心概念,掌握常用操作,并完成几个实战示例。

## 一、Docker 是什么?

**Docker** 是一个开源的容器化平台,它可以把应用程序及其依赖打包成一个**可移植的镜像**,在任何安装了 Docker 的机器上以**容器**的形式运行。

打个比方:

- **镜像 (Image)** 就像一张"安装光盘"或"模板",包含了应用运行所需的一切(代码、运行时、系统库、配置)。
- **容器 (Container)** 就是这张光盘运行起来的"实例",多个实例之间相互隔离。
- **仓库 (Registry)** 是存放镜像的"镜像商店",最著名的是 [Docker Hub](https://hub.docker.com)。

### 为什么用 Docker?

- **环境一致**:"在我电脑上能跑"的问题从此消失,开发、测试、生产环境完全一致。
- **轻量高效**:容器共享宿主内核,启动只需毫秒级,资源占用远小于虚拟机。
- **快速部署**:一条命令即可拉起服务,配合 Compose 可以一键启动整套应用栈。
- **隔离安全**:容器之间相互隔离,互不干扰。

## 二、安装 Docker

以 Ubuntu/Debian 为例,官方提供了一键安装脚本:

```bash
curl -fsSL https://get.docker.com | sh
```

安装完成后启动守护进程并验证:

```bash
sudo systemctl start docker
sudo systemctl enable docker
docker version        # 查看版本
docker run hello-world  # 测试运行
```

> ⚠️ 注意:如果在**无特权容器/虚拟机**中运行 Docker(Docker-in-Docker),可能会遇到 `unshare: operation not permitted` 或 `Failed to create bridge docker0` 等权限错误,这是因为缺少 `CAP_SYS_ADMIN` 能力,通常无法绕开,只能改用原生安装或其他方案。

## 三、镜像与容器的常用命令

### 镜像操作

```bash
docker pull nginx          # 拉取镜像
docker images              # 查看本地镜像
docker rmi nginx           # 删除镜像
docker search mysql        # 搜索镜像
```

### 容器操作

```bash
docker run -d --name web -p 8080:80 nginx   # 后台运行,映射端口
docker ps                                   # 查看运行中的容器
docker ps -a                                # 查看所有容器
docker logs -f web                          # 查看日志
docker exec -it web bash                    # 进入容器
docker stop web && docker rm web            # 停止并删除容器
```

常用参数说明:

| 参数 | 含义 |
|------|------|
| `-d` | 后台运行 |
| `-p 8080:80` | 端口映射:宿主机8080 → 容器80 |
| `-v /data:/var/lib/data` | 目录挂载 |
| `--name` | 容器命名 |
| `--restart always` | 开机自启/异常自动重启 |
| `--network` | 指定网络 |

## 四、数据卷:数据持久化的关键

容器删除后,内部数据会随之消失。要持久化数据,必须使用**数据卷**或**目录挂载**:

```bash
# 命名卷
docker volume create mydata
docker run -d -v mydata:/app/data mysql

# 目录挂载(推荐,方便备份)
docker run -d -v /opt/mysql:/var/lib/mysql mysql
```

> 💡 部署数据库(MySQL/PostgreSQL)时,**一定要挂载数据目录**,否则容器重建 = 数据丢失。

## 五、网络:容器间如何通信

Docker 默认提供三种网络模式:

- **bridge(默认)**:容器通过虚拟网桥互联,可指定 `--network` 加入同一网络,通过**容器名**互相访问。
- **host**:容器直接使用宿主机网络,性能最好,但端口直接暴露。
- **none**:无网络。

```bash
docker network create mynet          # 创建自定义网络
docker run -d --network mynet --name app1 myapp
docker run -d --network mynet --name app2 myapp
# 此时 app1 容器内可以通过 http://app2:8080 访问 app2
```

> 💡 把 Nginx、应用、数据库放进同一个自定义网络,用容器名互相调用,是常见的生产实践。

## 六、Docker Compose:一键编排多容器

当应用由多个服务组成(如 Nginx + 后端 + 数据库)时,用 `docker-compose.yml` 统一编排:

```yaml
version: "3"
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - db
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
    volumes:
      - db_data:/var/lib/mysql
volumes:
  db_data:
```

```bash
docker compose up -d      # 启动全部服务
docker compose down       # 停止并移除
docker compose logs -f    # 查看日志
docker compose ps         # 查看状态
```

## 七、实战:用 Docker 部署 Nginx + 静态网站

```bash
# 1. 拉取镜像
docker pull nginx

# 2. 准备站点目录
mkdir -p /opt/www && echo '<h1>Hello Docker!</h1>' > /opt/www/index.html

# 3. 运行容器
docker run -d \
  --name my-site \
  -p 8080:80 \
  -v /opt/www:/usr/share/nginx/html:ro \
  --restart always \
  nginx

# 4. 验证
curl http://localhost:8080
```

## 八、避坑指南

1. **容器时区**:默认是 UTC,应用里时间不对可以在启动时加 `-e TZ=Asia/Shanghai` 或挂载 `/etc/localtime`。
2. **资源限制**:用 `-m 512m --cpus 1` 限制内存和 CPU,防止容器吃光宿主机资源。
3. **镜像体积**:尽量使用 `alpine` 等精简镜像,减小镜像体积。
4. **不要进容器改配置**:容器是"一次性"的,配置修改应通过挂载或重新构建镜像,否则容器重建后修改就丢了。
5. **安全**:容器内的 root 权限不等于宿主机 root,但错误挂载(`/:/host`)会很危险,慎用。

## 九、结语

Docker 的核心思想是**"构建一次,到处运行"**。掌握它之后,部署服务从"装环境"变成了"拉镜像跑起来",效率提升非常明显。

如果你想进一步深入,可以继续学习:

- 编写 Dockerfile 构建自己的镜像
- Docker 镜像分层与缓存机制
- 与 CI/CD 结合实现自动化部署
- 容器编排:Kubernetes

希望这篇文章对你有帮助,欢迎在评论区交流讨论!
