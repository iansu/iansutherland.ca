import { menuItems, MenuItem } from '@lib/menu-items';

export interface MenuItemNode {
  parent?: MenuItemNode;
  children: MenuItemNode[];
  data?: MenuItem;
}

const getMenuItems = (): MenuItemNode => {
  const root: MenuItemNode = {
    children: [],
  };

  const visitNode = (node: MenuItemNode, menuItems: MenuItem[]) => {
    menuItems.forEach((menuItem) => {
      const newNode: MenuItemNode = {
        parent: node,
        children: [],
        data: menuItem,
      };

      node.children.push(newNode);

      if (menuItem.type === 'folder') {
        visitNode(newNode, menuItem.menuItems);
      }
    });
  };

  visitNode(root, menuItems);

  return root;
};

const getPathToRoot = (node: MenuItemNode): string[] => {
  const path: string[] = [];

  let currentNode = node;

  while (currentNode.parent) {
    path.unshift(currentNode.data?.title || '');
    currentNode = currentNode.parent;
  }

  return path;
};

const searchMenuItems = (rootNode: MenuItemNode, query: string): MenuItemNode => {
  const results: MenuItemNode = {
    children: [],
  };

  const visitNode = (node: MenuItemNode) => {
    node.children.forEach((child) => {
      if (child.data?.title.toLowerCase().includes(query.toLowerCase())) {
        const newChild = { ...child, data: { ...child.data, title: getPathToRoot(child).join(' > ') } };

        results.children.push(newChild);
      }

      visitNode(child);
    });
  };

  visitNode(rootNode);

  return results;
};

const printTree = (node: MenuItemNode) => {
  let treeString = '<root>';

  const visitNode = (node: MenuItemNode, level: number) => {
    node.children.forEach((child) => {
      treeString += `\n├${'─'.repeat(level)} ${child.data?.title}`;
      visitNode(child, level + 1);
    });
  };

  visitNode(node, 1);

  console.log(treeString);
};

export { getMenuItems, searchMenuItems, printTree };
