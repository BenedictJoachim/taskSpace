import { Form, redirect } from "react-router-dom";
import { AppwriteService } from "../services/AppwriteService";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Form method="post">
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}

export async function loginAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await AppwriteService.login(email, password);
    return redirect("/dashboard");
  } catch {
    return { error: "Invalid credentials" };
  }
}
