
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextArea(){
    return (
        <div style={{display: "flex", justifyContent: "center" }}>
            <div className="toolbar-container">
                <Editor 
                editorClassName="shadow-lg"
                wrapperClassName="editor-wrapper"
                toolbarClassName="editor-toolbar" />
            </div>
        </div>
            
        
    )
};

export default TextArea;