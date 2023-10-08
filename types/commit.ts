export interface Author {
  name: string;
  email: string;
  date: string;
}
export interface Committer {
  name: string;
  email: string;
  date: string;
}
export interface CommitInfo {
  message: string;
  author: Author;
  committer: Committer;
}
export interface Commit {
  sha: string;
  node_id: string;
  commit: CommitInfo;
}
