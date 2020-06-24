export interface IssueRepo {
  html_url: string;
  title: string;
  user: {
    login: string
  };
  created_at: string;
  state: string;
  body: string | null;
}
