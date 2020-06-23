export interface InfoRepo {
  language: string;
  has_issues: boolean;
  name: string;
  created_at: string;
  open_issues: number;
  owner: {
    login: string;
  };
}
