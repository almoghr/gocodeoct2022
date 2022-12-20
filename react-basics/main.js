console.log('hello')

const ButtonElement = React.createElement('button', {onClick: () => alert("hi")}, 'clickMe')


ReactDOM.render(ButtonElement, document.getElementById("app"))
