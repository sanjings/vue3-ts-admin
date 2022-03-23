module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'docs', // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'feat', // 新增feature功能
        'fix', // 修复bug
        'merge', // 仅进行分支合并.
        'improvement', // 用于对当前实现进行改进而没有添加新功能或修复错误的提交.
        'perf', // 优化相关，比如提升性能、体验
        'refactor', // 代码重构，没有加新功能或者修复bug
        'revert', // 回滚到上一个版本
        'style', // 代码格式修改，仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑，注意不是css修改
        'test', // 测试用例，包括单元测试、集成测试等
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'build' // 主要目的是修改项目构建系统(例如 glup，webpack，rollup的配置等)的提交
      ]
    ]
  }
};
