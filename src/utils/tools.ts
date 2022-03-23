/**
 * 防抖函数
 * @param fn 回调函数
 * @param delayTime 延迟执行毫秒数
 * @returns 具备防抖功能的函数
 */
const debounce = (fn: () => any, delayTime = 300) => {
  let timer: NodeJS.Timeout | null = null;

  return function (this: any, ...args: any) {
    timer && clearTimeout(timer) && (timer = null);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delayTime);
  };
};

/**
 * 简易深克隆
 * @param data 被克隆的值
 */
const deepClone = <T = unknown>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};

export { debounce, deepClone };
