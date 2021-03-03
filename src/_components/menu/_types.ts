export interface MenuItem {
  active?: boolean;
  children?: MenuItem[];
  label: string;
  link?: string;
}
