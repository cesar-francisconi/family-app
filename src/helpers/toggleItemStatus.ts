export interface ToggleItemStatusProps {
  id: string;
  checkFn: (id: string) => Promise<boolean>;
  addFn: (id: string) => void;
  removeFn: (id: string) => void;
}

export const toggleItemStatus = async ({
  id,
  checkFn,
  addFn,
  removeFn,
}: ToggleItemStatusProps) => {
  const exists = await checkFn(id);

  if (exists) {
    await removeFn(id);
  } else {
    await addFn(id);
  };
};
