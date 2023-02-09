const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs"); //

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: () => {
    console.log("Removing a new note");
  },
});
yargs.command({
  command: "read",
  describe: "Read a new note",
  handler: () => {
    console.log("Reading a new note");
  },
});
yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    console.log("Listing chosen notes");
  },
});

yargs.parse();
