export interface User {
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer"; 
}
