sequenceDiagram
    participant browser
    participant server
 
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: The Javascript code handles adding the new note to the page. 