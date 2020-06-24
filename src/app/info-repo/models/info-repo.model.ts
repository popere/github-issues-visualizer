export interface InfoRepo {
  html_url: string;
  language: string;
  has_issues: boolean;
  name: string;
  created_at: string;
  open_issues: number;
  owner: {
    login: string;
  };
}
