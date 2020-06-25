export interface InfoRepo {
  html_url: string;
  language: string;
  has_issues: boolean;
  name: string;
  full_name: string;
  created_at: string;
  open_issues: number;
  owner: {
    login: string
  };
}

export interface InputRepo {
  username: string;
  repositoryName: string;
}

export interface Issue {
  html_url: string;
  title: string;
  user: {
    login: string
  };
  created_at: string;
  state: string;
  body: string | null;
}
