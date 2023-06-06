console.log('app.js is running');

// JSX - Javascript XML provided by ReactJS
let template = <p>
  ~Testing~
</p>;

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
