(this.webpackJsonpfirst_movie_app=this.webpackJsonpfirst_movie_app||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),s=a.n(i),c=a(2),o=a.n(c),l=a(13),m=a(14),u=a(15),v=a(18),p=a(17),d=a(16),f=a.n(d);a(42);var g=function(e){var t=e.title,a=e.year,n=e.rating,i=e.summary,s=e.poster,c=e.genre;return r.a.createElement("div",null,r.a.createElement("img",{className:"img_ctrl",src:s,alt:t,title:t}),r.a.createElement("h2",{className:"title"},t),r.a.createElement("div",{className:"genre"},c),r.a.createElement("div",{className:"year"},a),r.a.createElement("div",{className:"ration"},n,"/10.0"),r.a.createElement("p",{className:"summary"},i.slice(0,150)))},y=(a(43),"https://yts-proxy.now.sh/list_movies.json?sort_by=ratings"),E=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoad:!0,movie:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(y);case 2:a=t.sent,n=a.data.data.movies,console.log(n),e.setState({movie:n,isLoad:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.isLoad,a=e.movie;return r.a.createElement("div",null,t?r.a.createElement("div",{className:"isLoading"},'"Loading..."'):r.a.createElement("div",{className:"whole_ctrl"},a.map((function(e){return r.a.createElement("div",{className:"whole2_ctrl",key:e.id},r.a.createElement(g,{title:e.title,rating:e.rating,year:e.year,summary:e.summary,genre:e.genres.map((function(e,t){return e+" "})),poster:e.medium_cover_image}))}))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1fdd9dde.chunk.js.map