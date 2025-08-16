export interface ToggleItemStatusProps {
  id: string;
  check: boolean;
  addFn: (id: string) => Promise<void>;
  removeFn: (id: string) => Promise<void>;
}

export const toggleItemStatus = async ({
  id,
  check,
  addFn,
  removeFn,
}: ToggleItemStatusProps) => {
  const exists = check;

  if (exists) {
    await removeFn(id);
  } else {
    await addFn(id);
  };
};
