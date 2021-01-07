/**
 * @name: 生成树状菜单
 * @param {Array} list 扁平化列表数据
 * @param {String} pIdKey 父ID 对应的键名
 * @return:
 */
export const toTree = (list, pIdKey) => {
  list.forEach(item => {
    delete item.children;
  });

  const map = {};
  list.forEach(item => {
    map[item.id] = item;
  });

  const val = [];
  list.forEach(item => {
    const parent = map[item[pIdKey]];

    if (parent) {
      // ;(parent.children || (parent.children = [])).push(item)
      parent.children = parent.children || [];
      parent.children.push(item);
    } else {
      val.push(item);
    }
  });

  return val;
};
