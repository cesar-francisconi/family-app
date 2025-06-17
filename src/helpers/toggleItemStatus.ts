export interface ToggleItemStatusProps {
  id: string;
  checkFn: (id: string) => boolean;
  addFn: (id: string) => void;
  removeFn: (id: string) => void;
}

export const toggleItemStatus = ({
  id,
  checkFn,
  addFn,
  removeFn,
}: ToggleItemStatusProps): void => {
  const exists = checkFn(id);

  if (exists) {
    removeFn(id);
  } else {
    addFn(id);
  };
};
