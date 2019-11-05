(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){e.exports=n(49)},40:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(29),i=n.n(o),l=(n(40),n(11)),u=n(12),c=n(14),s=n(13),m=n(15),d=n(16),b=n(5),h=n(50),p=n(20);function f(){var e=Object(p.a)(["\n    query($id:ID){\n        book(id:$id){\n            id\n            name\n            genre\n            author{\n                id\n                name\n                age\n                books{\n                    name\n                    id\n                }\n            }\n        }\n    }\n"]);return f=function(){return e},e}function v(){var e=Object(p.a)(["\n    mutation($name:String!, $genre:String!, $authorId:ID!,){\n        addBook(name:$name, genre:$genre, authorId:$authorId){\n            name\n            id\n        }\n    }\n"]);return v=function(){return e},e}function k(){var e=Object(p.a)(["\n{\n    authors{\n        name\n        id\n    }\n}\n"]);return k=function(){return e},e}function E(){var e=Object(p.a)(["\n{\n    books{\n        name\n        id\n    }\n}\n"]);return E=function(){return e},e}var j=Object(d.b)(E()),O=Object(d.b)(k()),g=Object(d.b)(v()),y=Object(d.b)(f()),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"displayBookDetails",value:function(){var e=this.props.data.book;return e?r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.genre),r.a.createElement("p",null,e.author.name),r.a.createElement("p",null,"All books by this author:"),r.a.createElement("ul",{className:"other-books"},e.author.books.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))):r.a.createElement("div",null,"No book selected....")}},{key:"render",value:function(){return r.a.createElement("div",{id:"book-details"},this.displayBookDetails())}}]),t}(a.Component),B=Object(h.a)(y,{options:function(e){return{variables:{id:e.bookId}}}})(I),A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"displayBooks",value:function(){var e=this,t=this.props.data;return t.loading?r.a.createElement("div",null,"Loading books..."):t.books.map((function(t){return r.a.createElement("li",{key:t.id,onClick:function(n){e.setState({selected:t.id})}},t.name)}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"main"},r.a.createElement("ul",{id:"book-list"},this.displayBooks()),r.a.createElement(B,{bookId:this.state.selected}))}}]),t}(a.Component),C=Object(h.a)(j)(A),S=n(34),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={name:"",genre:"",authorId:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"displayAuthors",value:function(){var e=this.props.getAuthorsQuery;return e.loading?r.a.createElement("option",{disabled:!0},"Loading authors...."):e.authors.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))}},{key:"submitForm",value:function(e){e.preventDefault(),this.props.addBookMutation({variables:{name:this.state.name,genre:this.state.genre,authorId:this.state.authorId},refetchQueries:[{query:j}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-book",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Book name:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Genre:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({genre:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Author:"),r.a.createElement("select",{onChange:function(t){return e.setState({authorId:t.target.value})}},r.a.createElement("option",null,"Select author"),this.displayAuthors())),r.a.createElement("button",null,"+"))}}]),t}(a.Component),N=Object(S.a)(Object(h.a)(O,{name:"getAuthorsQuery"}),Object(h.a)(g,{name:"addBookMutation"}))($),D=new d.a({uri:"/graphql"}),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b.b,{client:D},r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Reading List"),r.a.createElement(C,null),r.a.createElement(N,null)))}}]),t}(a.Component);i.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.61f7fb42.chunk.js.map