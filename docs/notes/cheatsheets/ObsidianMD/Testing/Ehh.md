`<% tp.file.content %>`  
`<% tp.file.creation_date() %>`  
`<% tp.file.creation_date("YYYY-MM-DD") %>`  
` [[<% (await tp.file.create_new("MyFileContent", "MyFilename")).basename %>]]`
`<% tp.file.cursor(1) %>`  
`<% tp.file.cursor_append("Some text to append.") %>`  
`<% tp.file.exists("FileName") %>`  
`<% tp.file.find_tfile("FileName").basename %>`  
`<% tp.file.folder() %>`  
`<% tp.file.folder(true) %>`  
`<% tp.file.include("[[File]]") %>`  
`<% tp.file.last_modified_date() %>`  
`<% tp.file.last_modified_date("YYYY-MM-DD @ HH:mm:ss") %>`  
`<% tp.file.path() %>`  
`<% tp.file.path(true) %>`  
`<% tp.file.selection() %>`  
`<% tp.file.tags %>`  
`<% tp.file.title %>`  
`<% tp.file.title.split(" ")[1] %>`
