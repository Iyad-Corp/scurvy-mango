import { signOut } from "supertokens-auth-react/recipe/emailpassword";

async function onLogout() {
    await signOut();
    window.location.href = "/";
}

export default onLogout;