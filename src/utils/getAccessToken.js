export default async api =>
  await (api.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("jwt")}`);
