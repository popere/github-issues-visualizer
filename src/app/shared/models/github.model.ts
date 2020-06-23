export interface InfoRepo {
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

export interface StoreGithub {
  inputRepo: InputRepo;
  repoInfo: InfoRepo;
}
