const heading = React.createElement("div", {
    id: "parent"
}, [React.createElement("div", {
    id: "child"
}, [React.createElement("h1", {
    id: "heading"
}, "Hello React"), React.createElement("h2", {
    id: "heading"
}, "Hello React h2")]), React.createElement("div", {
    id: "child2"
}, [React.createElement("h1", {
    id: "heading"
}, "Hello React"), React.createElement("h2", {
    id: "heading"
}, "Hello React h2")])])
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(heading)
console.log(heading) //object 