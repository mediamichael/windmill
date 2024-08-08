function mergeSchema(schema, enum_payload = {}) {
  if (!schema.properties || !enum_payload) {
    return schema;
  }
  let new_schema = JSON.parse(JSON.stringify(schema));
  for (let [key, value] of Object.entries(new_schema.properties ?? {})) {
    if (enum_payload[key]) {
      value.enum = enum_payload[key];
      value["disableCreate"] = true;
    }
  }
  return new_schema;
}
function pathToMeta(path) {
  const splitted = path.split("/");
  let ownerKind;
  if (splitted[0] == "g") {
    ownerKind = "group";
  } else if (splitted[0] == "f") {
    ownerKind = "folder";
  } else if (splitted[0] == "u") {
    ownerKind = "user";
  } else {
    console.error("Not recognized owner:" + splitted[0]);
    return {
      ownerKind: "user",
      owner: "",
      name: ""
    };
  }
  return {
    ownerKind,
    owner: splitted[1],
    name: splitted.slice(2).join("/")
  };
}
function prettyLanguage(lang) {
  switch (lang) {
    case "nativets":
      return "Native TypeScript";
    default:
      return lang.charAt(0).toUpperCase() + lang.slice(1);
  }
}
export {
  prettyLanguage as a,
  mergeSchema as m,
  pathToMeta as p
};
