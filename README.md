# 不会游泳的兔子

个人博客与网站导航，基于 [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)。

**博客地址：https://lxl179233.github.io**

## 写文章

在 `src/content/blog/` 新建 `.md` 文件，可复制 `welcome.md` 修改。填写标题、摘要、发布时间、标签与正文，提交到 main 分支后会自动发布。

也可以直接在 GitHub 网页中打开文章文件，点击编辑，完成后选择 Commit changes。

## 管理导航

编辑 `public/navigation.json`，修改网址、名称、说明和分类后提交。

## 修改站点信息

站名、简介和菜单：`src/site.config.ts`。关于页：`src/pages/about/index.astro`。

完整说明见 [BLOG-使用说明.md](BLOG-使用说明.md)。初始文章与网站收藏已标记为示例。

## 自动发布

GitHub Actions 使用 `.github/workflows/pages.yml`，提交 main 分支后自动生成静态页面并部署到 GitHub Pages。可在仓库 Actions 页面查看状态。

仓库 Settings → Pages → Source 应选择 GitHub Actions。发布使用 GitHub 内置临时令牌，无需个人访问令牌。

## 开源许可

基于 Astro Theme Pure 修改，保留上游 Apache-2.0 许可证与页脚主题署名，详见 LICENSE。