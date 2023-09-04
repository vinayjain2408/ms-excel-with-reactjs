// import React, { Component } from 'react';
// import { convertFromRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';


// const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     const contentState = convertFromRaw(content);
//     this.state = {
//       contentState,
//     }
//   }

//   onContentStateChange = (contentState) => {
//     this.setState({
//       contentState,
//     });
//   };


//   //   onEditorStateChange = (editorState) => {
//   //   this.setState({
//   //     editorState,
//   //   });
//   // };

//   render() {
//     const { contentState } = this.state;
//     return (
//       <div>
//         <Editor
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onContentStateChange={this.onContentStateChange}
//         />
//         <textarea
//           disabled
//           value={JSON.stringify(contentState, null, 4)}
//         />
//       </div>
//     );
//   }
// }
// export default App



import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML;








// import React, { Component } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';

// class EditorConvertToHTML extends Component {
//   state = {
//     editorState: EditorState.createEmpty(),
//   }

//   onEditorStateChange = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <textarea
//           disabled
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div>
//     );
//   }
// }

// export default EditorConvertToHTML;





// import React, { useState } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

// function App() {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

//   const onEditorStateChange = (editorState) => {
//     setEditorState(editorState);
//   };

//   return (
//     <div>
//       <Editor
//         editorState={editorState}
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
//         onEditorStateChange={onEditorStateChange}
//       />
//       <textarea
//         disabled
//         value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//       />
//     </div>
//   );
// }

// export default App;