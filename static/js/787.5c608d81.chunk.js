"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[787],{79:function(e,n,t){t.d(n,{X:function(){return r}});var r=function(e,n,t){fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(n,"/").concat(e,"?api_key=").concat("0402ef8c6d0b2370fa6ac2b572dad398","&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Insert other name"))})).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))}},787:function(e,n,t){t.r(n);var r=t(439),c=t(791),o=t(689),i=t(79),u=t(184);n.default=function(){var e=(0,o.UO)(),n=Number(e.moviesId),t=(0,c.useState)(),a=(0,r.Z)(t,2),s=a[0],h=a[1];return(0,c.useEffect)((function(){(0,i.X)("reviews",n,h)}),[]),(0,u.jsx)("section",{children:s&&(0,u.jsx)("ul",{children:s.results.length>0?s.results.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("p",{children:e.author}),(0,u.jsx)("p",{children:e.content})]},e.id)})):(0,u.jsx)("li",{children:"We don't have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=787.5c608d81.chunk.js.map