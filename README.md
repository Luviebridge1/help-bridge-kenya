
import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";
import { v4 as uuid } from "uuid";

export default async (req: Request, context: Context) => {
  // Accessing the request as `multipart/form-data`.
  const form = await req.formData();
  const file = form.get("file") as File;

  // Generating a unique key for the entry.
  const key = uuid();

  const uploads = getStore("file-uploads");
  await uploads.set(key, file, {
    metadata: { country: context.geo.country.name }
  });

  return new Response("Submission saved");
};
