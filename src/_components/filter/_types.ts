export interface FilterItem {
  label: string;
  active?: boolean;
  children?: FilterItem[];
  link?: string;
}
