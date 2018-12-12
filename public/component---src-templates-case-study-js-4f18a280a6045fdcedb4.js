(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,t,a){"use strict";a.r(t);a(48);var i=a(7),s=a.n(i),r=a(0),l=a.n(r),n=a(148),o=a.n(n),d=a(146),c=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"case-study__cta"},l.a.createElement("h3",{className:"case-study__title"}," ","Looking for a Front-end Developer to create something rad like this? Let’s Talk."," "),l.a.createElement("a",{href:"mailto:adamrasheed91@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"btn btn--primary"},"Email Me"))},t}(l.a.Component);a.d(t,"query",function(){return f});var u=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.data;return l.a.createElement(d.a,null,l.a.createElement("main",{className:"case-study"},l.a.createElement("article",{className:"case-study__content"},l.a.createElement("h1",{className:"page-title"},e.wordpressWpCaseStudies.title),null!=e.wordpressWpCaseStudies.featured_media?l.a.createElement(o.a,{className:"featured-img case-study__img",fluid:e.wordpressWpCaseStudies.featured_media.localFile.childImageSharp.fluid}):null,null!=e.wordpressWpCaseStudies.acf.overview?l.a.createElement("div",{className:"container container--small"},l.a.createElement("h2",null,"Project Overview"),l.a.createElement("ul",null,e.wordpressWpCaseStudies.acf.overview.map(function(e){return l.a.createElement("li",null,e.overview_point)}))):null,l.a.createElement("div",{className:"container container--smal",dangerouslySetInnerHTML:{__html:e.wordpressWpCaseStudies.content}}),l.a.createElement(c,null))))},t}(l.a.Component),f=(t.default=u,"3174917810")},148:function(e,t,a){"use strict";var i=a(33);t.__esModule=!0,t.default=void 0;var s,r=i(a(7)),l=i(a(49)),n=i(a(149)),o=i(a(150)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var m=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),s).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+s+"<img "+n+o+t+l+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,s=e.onError,r=(0,n.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},r,{onLoad:i,onError:s,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,s=!0,r=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!1,r=!0),"undefined"==typeof window&&(i=!1,s=!1),t.critical&&(i=!0,s=!1,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:s,IOSupported:r,fadeIn:n,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,r=void 0===s?{}:s,l=e.imgStyle,n=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.Tag,w="boolean"==typeof m?"lightgray":m,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,f),v=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n);if(p){var E=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:E.base64,style:S}),E.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:E.tracedSVG,style:S}),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,E.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),d.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),d.default.createElement(y,{alt:a,title:t,src:E.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},E))}}))}if(h){var L=h,I=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete I.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.base64,style:S}),L.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.tracedSVG,style:S}),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var v=b;t.default=v}}]);
//# sourceMappingURL=component---src-templates-case-study-js-4f18a280a6045fdcedb4.js.map