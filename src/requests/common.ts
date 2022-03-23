import { ajaxGet } from '../utils/http';

/**
 * 获取导航菜单列表
 */
export const httpGetMenuList = () => {
  return ajaxGet('/api/menu/list');
};
