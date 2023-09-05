// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
// import 'react-summernote/dist/react-summernote.css'; // Import Summernote CSS
// import $ from 'jquery'; // Import jQuery (required for Summernote)
// import 'summernote/dist/summernote'; // Import Summernote

// // Import the React Summernote Component
// import ReactSummernote from 'react-summernote';

// // Initialize the jQuery adapter for Summernote
// ReactSummernote.initialize({ 
//   dialogsInBody: true, // For Bootstrap modals
//   shortcuts: false, // Disable keyboard shortcuts
// });

// class MyEditor extends Component {
//   handleImageUpload(fileList) {
//     // Handle image uploads here (optional)
//     console.log('Uploaded images:', fileList);
//   }

//   render() {
//     return (
//       <div>
//         <ReactSummernote
//           value="<p>Hello, Summernote!</p>"
//           options={{
//             height: 150, // Set editable area's height
//             codemirror: {
//               theme: 'monokai', // CodeMirror theme
//             },
//           }}
//           onImageUpload={this.handleImageUpload}
//         />
//       </div>
//     );
//   }
// }

// export default MyEditor;







// import React, { useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
// import 'react-summernote/dist/react-summernote.css'; // Import Summernote CSS
// import $ from 'jquery'; // Import jQuery (required for Summernote)
// import 'summernote/dist/summernote'; // Import Summernote
// import 'react-summernote/lang/summernote-ru-RU'; // Import a language file if needed

// // Import the React Summernote Component
// import ReactSummernote from 'react-summernote';

// // Initialize the jQuery adapter for Summernote
// ReactSummernote.initialize({
//   dialogsInBody: true, // For Bootstrap modals
//   shortcuts: false, // Disable keyboard shortcuts
// });


// function Edit() {
//     const editorRef = useRef(null);

//     useEffect(() => {
//       // You can use the editorRef to programmatically interact with the Summernote editor.
//       // For example, to set or get content, you can use editorRef.current.summernote('code') or editorRef.current.summernote('code', newContent).
//     }, []);
  
//     const handleImageUpload = (fileList) => {
//       // Handle image uploads here (optional)
//       console.log('Uploaded images:', fileList);
//     };
  
//   return (
//     <div>
//     <ReactSummernote
//       ref={editorRef}
//       value="<p>Hello, Summernote!</p>"
//       options={{
//         height: 150, // Set editable area's height
//         codemirror: {
//           theme: 'monokai', // CodeMirror theme
//         },
//         lang: 'ru-RU', // Set the language (optional)
//       }}
//       onImageUpload={handleImageUpload}
//     />
//   </div>
//   )
// }

// export default Edit
