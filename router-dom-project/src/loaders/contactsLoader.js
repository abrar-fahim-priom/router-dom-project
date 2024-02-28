import { createContact, getContacts } from "../contacts";

export async function getContactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function createContactAction() {
  const contact = await createContact();
  return { contact };
}
