type RenderElementsProps<T> = {
  of?: T[];
  render: (item: T, index: number) => React.ReactNode;
};

export const renderElements = <T>({
  of = [],
  render,
}: RenderElementsProps<T>): React.ReactNode[] => {
  if (!Array.isArray(of)) return [];
  return of.map((item, index) => render(item, index));
};
