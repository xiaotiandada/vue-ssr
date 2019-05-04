const express = require("express");
const server = express();
const fs = require("fs");
const path = require("path");
const { createBundleRenderer } = require("vue-server-renderer");

function createRenderer(bundle, options) {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      runInNewContext: false
    })
  );
}

let renderer;
const templatePath = path.resolve(__dirname, "./src/index.template.html");

const bundle = require("./dist/vue-ssr-server-bundle.json");
const template = fs.readFileSync(templatePath, "utf-8");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");
renderer = createRenderer(bundle, {
  template,
  clientManifest
});
// 设置静态文件目录
server.use("/js", express.static(path.resolve(__dirname, "./dist/js")));
server.use("/img", express.static(path.resolve(__dirname, "./dist/img")));
server.use("/css", express.static(path.resolve(__dirname, "./dist/css")));

// 在服务器处理函数中……
server.get("*", (req, res) => {
  const context = {
    title: "ssr",
    url: req.url
  };
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    if (err) {
      res.status(500).end("Internal Server Error");
      return;
    }
    // console.log(context.meta.inject());
    console.log(context.state);
    // console.log(html);
    res.end(html);
  });
});

server.listen(8888);
