module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc",

  // Compile sass files
  "**/*.(sass|scss)": (filenames) => [
    `sass ${filenames
      .map((e) => {
        return `${e}:${e.replaceAll("sass", "css")}`;
      })
      .join(" ")}`,
  ],

  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [
    //     `yarn eslint ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
    "yarn run lint",
    "yarn run build",
  ],

  // Build docker files
  "docker-compose.example.yml": (filenames) => [
    "cp docker-compose.example.yml docker-compose.yml",
    "sudo docker compose build",
  ],
  Dockerfile: (filenames) => [
    "cp docker-compose.example.yml docker-compose.yml",
    "sudo docker compose build",
  ],
  ".dockerignore": (filenames) => [
    "cp docker-compose.example.yml docker-compose.yml",
    "sudo docker compose build",
  ],
  // Prettify only Markdown and JSON files
  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,
};
