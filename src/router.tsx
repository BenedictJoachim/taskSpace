import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/dashboard/index.tsx"), // Home (Dashboard)
  route("/login", "./routes/login.tsx"), // Login
  route("/register", "./routes/register.tsx"), // Register
  route("/admin", "./routes/admin/index.tsx", [
    route("/tasks", "./routes/admin/tasks/index.tsx"),
    route("/tasks/:taskId", "./routes/admin/tasks/$taskId.tsx"),
    route("/tasks/:taskId/edit", "./routes/admin/tasks/$taskId.edit.tsx"),
  ]),
  route("/dashboard", "./routes/dashboard/index.tsx", [
    route("/tasks", "./routes/dashboard/tasks/index.tsx"),
    route("/tasks/:taskId", "./routes/dashboard/tasks/$taskId.tsx"),
    route("/tasks/:taskId/edit", "./routes/dashboard/tasks/$taskId.edit.tsx"),
  ]),
] satisfies RouteConfig;
