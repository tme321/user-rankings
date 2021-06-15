import fs from "fs";

function onCopyFile(error) {
    if(error) {
        console.log("File copy error:", error);
    }
}

fs.copyFile( 
    "./src/config.html", 
    "./dist/config.html", 
    fs.constants.COPYFILE_FICLONE, 
    onCopyFile);

fs.copyFile( 
    "./src/panel.html", 
    "./dist/panel.html", 
    fs.constants.COPYFILE_FICLONE, 
    onCopyFile);