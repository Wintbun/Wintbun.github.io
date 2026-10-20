# 不会游泳的兔子

基于 [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)，保留上游 Apache-2.0 许可证和主题署名。

## 写文章

在 `src/content/blog/` 新建 Markdown 文件，例如 `my-first-post.md`。复制 `welcome.md`，修改标题、摘要、发布时间、标签和正文。用 `draft: true` 隐藏草稿，准备发布时改为 `draft: false`。

```markdown
---
title: '我的第一篇文章'
description: '用一句话介绍文章'
publishDate: '2026-10-20T12:00:00+08:00'
tags: ['生活']
draft: false
comment: false
---

## 今天想记录的事

这里开始写正文。
```

图片放到 `public/images/`，用 `![图片说明](/images/example.jpg)` 引用。文件名决定文章网址，发布后尽量不要修改。

## 网站导航与介绍

编辑 `public/navigation.json`：category 分类、name 名称、url 网址、description 说明、mark 缩写。导航使用 category 大类和 subcategory 子分类。已从爱达杂货铺首页及其 36 个可加载子分类导入 510 个不同站点，过滤可识别的推广内容，并保留原有收藏。

站名、简介与菜单在 `src/site.config.ts`，关于页在 `src/pages/about/index.astro`。

## 提交与发布

博客源码仓库：https://github.com/Wintbun/Wintbun.github.io 。正式网址：https://wintbun.github.io 。

GitHub Pages 自动发布文件已准备在 `.github/workflows/pages.yml`。使用个人站点仓库 `Wintbun/Wintbun.github.io`，在仓库 Settings → Pages → Source 选择 GitHub Actions。此仓库名可以使网站运行在域名根路径，主题内的链接无需加前缀。发布流程使用 GitHub 内置的临时令牌，无需配置个人访问令牌。

之后提交到 main 分支会自动安装依赖、生成静态页面并发布到 https://wintbun.github.io 。文章文件在 `src/content/blog/`，可以直接在 GitHub 网页上新增或编辑，点击 Commit changes 提交。

提交后可到仓库 Actions 页面查看进度；“发布个人博客”流程成功后，更新会出现在正式网址。如果流程失败，打开失败步骤查看原因。

## 搜索收录

网站提供 robots.txt、站点地图与文章元数据。公网可访问不等于已被搜索引擎收录；可以在百度搜索资源平台或 Google Search Console 验证网站并提交站点地图，收录时间与排名由搜索引擎决定。
