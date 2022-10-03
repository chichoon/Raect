import { RootNode } from './RootNode';

export function createRoot(rootNode: Element | null) {
  if (!rootNode) throw new Error('No root node available');
  const root = new RootNode(rootNode);

  return root;
}
