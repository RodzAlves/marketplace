module.exports = function (plop) {
  // controller generator
  plop.setGenerator("component", {
    description: "Create a Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      },
      {
        type: "input",
        name: "context",
        message: "What is your component context?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase context}}/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs"
      }
    ]
  });

  plop.setGenerator("view", {
    description: "Create a View Page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your view page name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/views/{{pascalCase name}}/index.tsx",
        templateFile: "templates/view/index.tsx.hbs"
      }
    ]
  });
};
