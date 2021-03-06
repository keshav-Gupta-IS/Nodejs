 const chalk = require('chalk')
 const yargs = require('yargs')
 const notes = require('./notes')

 yargs.version('1.1.0')

 //create add command

 yargs.command({
     command : 'add',
     describe: 'Add a new note',
     builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type : 'string'
        }, 
        body:{
            describe:'Note Description',
            demandOption: true,
            type : 'string'
        }

    },
     handler(argv){
         notes.addNote(argv.title, argv.body)
     }
 })

 //create remove command

yargs.command({
     command : 'remove',
     describe: 'Remove a note',
     builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
     handler(argv){
         notes.removeNote(argv.title)
     }
 })
 // create read command

 yargs.command({
    command : 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// create list command


yargs.command({
    command : 'list',
    describe: 'List of all note',
    handler(){
        notes.listNotes()
    }
})
yargs.parse()  