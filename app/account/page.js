import { auth } from "../_lib/auth";

export const metadata = {
  title: "User Area",
};

export default async function Page() {
  const session = await auth();
  // Here we do not need to use optional chainning,
  // because we are sure that a user can only be here if he is autorized.
  const firstName = session.user.name.split(" ").at(0);

  return <h2 className="font-semibold text-2xl text-accent-400 mb-7">Welcome [firstName]</h2>;
}
