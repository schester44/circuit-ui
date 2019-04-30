(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./docs/content/styles/typography.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),m=a("./node_modules/@mdx-js/tag/dist/index.js"),s=a("./src/components/Text/index.js"),r=a("./src/components/Heading/index.js"),c=a("./src/components/SubHeading/index.js"),i=a("./node_modules/prop-types/index.js"),p=a.n(i),l=a("./node_modules/react-emotion/dist/index.esm.js"),g=a("./node_modules/emotion-theming/dist/index.esm.js"),d=a("./src/index.js");var h=Object(l.c)(s.a,{target:"e1e4hfvt0"})(function(e){var n=e.theme;return Object(l.a)("color:",n.colors.n500,";margin-left:",n.spacings.mega,";text-transform:lowercase;")},";"),E=function(e){var n=e.size,a=e.component,m=e.name,r=e.fontWeight,c=function(e,n){var a={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a}(e,["size","component","name","fontWeight"]),i=d.a.circuit.typography[m][n],p=i.fontSize,l=i.lineHeight,E=d.a.circuit.fontWeight[r];return o.a.createElement(g.a,{theme:d.a.circuit},Object(t.createElement)(a,Object.assign({children:o.a.createElement(t.Fragment,null,"A better way to get ",n,".",o.a.createElement(h,{element:"span",size:s.a.KILO},E?""+E:p+", "+l)),size:n},c)))};E.propTypes={component:p.a.func.isRequired,size:p.a.string.isRequired,fontWeight:p.a.string,name:p.a.string.isRequired},E.defaultProps={fontWeight:null};var u=E;n.default=function(e){var n=e.components;!function(e,n){var a={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"typography"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#typography"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Typography"),o.a.createElement(m.MDXTag,{name:"p",components:n},"For usage in React, see the ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/components/typography"}},"typography")," in the\ncomponent guidelines section."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"headings"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#headings"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Headings"),o.a.createElement(u,{size:r.a.ZETTA,component:r.a,name:"headings"}),o.a.createElement(u,{size:r.a.EXA,component:r.a,name:"headings"}),o.a.createElement(u,{size:r.a.PETA,component:r.a,name:"headings"}),o.a.createElement(u,{size:r.a.TERA,component:r.a,name:"headings"}),o.a.createElement(u,{size:r.a.GIGA,component:r.a,name:"headings"}),o.a.createElement(u,{size:r.a.MEGA,component:r.a,name:"headings"}),o.a.createElement(u,{size:r.a.KILO,component:r.a,name:"headings"}),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"subheading"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#subheading"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Subheading"),o.a.createElement(u,{size:"mega",component:c.a,name:"subHeadings"}),o.a.createElement(u,{size:"kilo",component:c.a,name:"subHeadings"}),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"text"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#text"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Text"),o.a.createElement(u,{size:s.a.GIGA,component:s.a,name:"text"}),o.a.createElement(u,{size:s.a.MEGA,component:s.a,name:"text"}),o.a.createElement(u,{size:s.a.KILO,component:s.a,name:"text"}),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"font-weights"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#font-weights"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Font weights"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Circuit has two font weights, regular and bold. You can only toggle the\nboldness of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Text"),", but not ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Heading")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Subheading"),"."),o.a.createElement(u,{size:s.a.MEGA,bold:!0,component:s.a,fontWeight:"bold",name:"text"}),o.a.createElement(u,{size:s.a.MEGA,component:s.a,name:"text",fontWeight:"regular"}),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"best-practices"}},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#best-practices"}},o.a.createElement(m.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Best practices"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Do not directly use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"theme.typography")," settings, but rather use the\nspecialized components ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Heading"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Subheading"),", and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Text"),".")))}},"./src/components/SubHeading/index.js":function(e,n,a){"use strict";var t=a("./src/components/SubHeading/SubHeading.js");n.a=t.a}}]);