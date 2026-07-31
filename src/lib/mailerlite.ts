const MAILERLITE_FORM_ACTION =
  "https://assets.mailerlite.com/jsonp/2541049/forms/194494941511026660/subscribe";

export async function subscribeToMailerLite({ email, archetype }: { email: string; archetype?: string }) {
  const body = new URLSearchParams();
  body.set("fields[email]", email);
  if (archetype) body.set("fields[archetype]", archetype);
  body.set("ml-submit", "1");
  body.set("anticsrf", "true");

  await fetch(MAILERLITE_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}
