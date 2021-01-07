/**
 * @name: 树状数据排序
 * @param {Array} treeData 树状列表数据
 * @param {String} sortKey 排序字段
 * @return:
 */
export const sortTree = (treeData, sortKey) => {
  function sort(list) {
    list.sort((a, b) => a[sortKey] - b[sortKey]);

    if (list.children && list.children.length) {
      sort(list.children);
    }

    return list;
  }

  return sort(treeData);
};
