import React from 'react';
import loadable from '@loadable/component';

interface Menu {
  title: string;
  page: string;
  path: string;
  children?: Menu[];
  meta: { name: string };
}

const MENUS: Menu[] = [
  { title: 'SquareGame', page: 'squareGame', path: 'squareGame', meta: { name: '方块游戏' } },
  { title: 'Calendar', page: 'calendar', path: 'calendar', meta: { name: '日历' } },
  { title: '403', page: '403', path: '403', meta: { name: '403未匹配页面' } },
];

function wrapComponent(page: string) {
  return loadable(() => import(/* webpackExclude: /components/ */ `./pages/${page}/index`));
}

const ROUTERS: {
  Component: React.ComponentType;
  path: string[];
  page: string;
  meta: { name: string };
}[] = [];

function node(nodes: Menu[], parentTitles: string[] = []) {
  nodes.map(({ page, title, children, path, meta }) => {
    if (page) {
      ROUTERS.push({
        Component: wrapComponent(page),
        path: [...parentTitles, title],
        page: `/${path}`,
        meta,
      });
    } else if (children) {
      node(children, [...parentTitles, title]);
    }
    return ROUTERS;
  });
}
console.log('ROUTERS', ROUTERS)
node(MENUS);
export default ROUTERS;
export { MENUS };
