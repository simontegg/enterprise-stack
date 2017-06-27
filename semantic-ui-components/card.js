module.exports = {
	".ui.cards > .card,\n.ui.card": {
		"maxWidth": "100%",
		"position": "relative",
		"display": [
			"-webkit-box",
			"-ms-flexbox",
			"flex"
		],
		"WebkitBoxOrient": "vertical",
		"WebkitBoxDirection": "normal",
		"msFlexDirection": "column",
		"flexDirection": "column",
		"width": "290px",
		"minHeight": "0px",
		"background": "#FFFFFF",
		"padding": "0em",
		"border": "none",
		"borderRadius": "0.28571429rem",
		"WebkitBoxShadow": "0px 1px 3px 0px #D4D4D5, 0px 0px 0px 1px #D4D4D5",
		"boxShadow": "0px 1px 3px 0px #D4D4D5, 0px 0px 0px 1px #D4D4D5",
		"WebkitTransition": "-webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease",
		"transition": [
			"-webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease",
			"box-shadow 0.1s ease, transform 0.1s ease",
			"box-shadow 0.1s ease, transform 0.1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease"
		],
		"zIndex": "''"
	},
	".ui.card": {
		"margin": "1em 0em"
	},
	".ui.cards > .card a,\n.ui.card a": {
		"cursor": "pointer"
	},
	".ui.card:first-child": {
		"marginTop": "0em"
	},
	".ui.card:last-child": {
		"marginBottom": "0em"
	},
	".ui.cards": {
		"display": [
			"-webkit-box",
			"-ms-flexbox",
			"flex"
		],
		"margin": "-0.875em -0.5em",
		"msFlexWrap": "wrap",
		"flexWrap": "wrap"
	},
	".ui.cards > .card": {
		"display": [
			"-webkit-box",
			"-ms-flexbox",
			"flex"
		],
		"margin": "0.875em 0.5em",
		"cssFloat": "none",
		"fontSize": "1em"
	},
	".ui.cards:after,\n.ui.card:after": {
		"display": "block",
		"content": "' '",
		"height": "0px",
		"clear": "both",
		"overflow": "hidden",
		"visibility": "hidden"
	},
	".ui.cards ~ .ui.cards": {
		"marginTop": "0.875em"
	},
	".ui.cards > .card > :first-child,\n.ui.card > :first-child": {
		"borderRadius": "0.28571429rem 0.28571429rem 0em 0em !important",
		"borderTop": "none !important"
	},
	".ui.cards > .card > :last-child,\n.ui.card > :last-child": {
		"borderRadius": "0em 0em 0.28571429rem 0.28571429rem !important"
	},
	".ui.cards > .card > :only-child,\n.ui.card > :only-child": {
		"borderRadius": "0.28571429rem !important"
	},
	".ui.cards > .card > .image,\n.ui.card > .image": {
		"position": "relative",
		"display": "block",
		"WebkitBoxFlex": "0",
		"msFlex": "0 0 auto",
		"flex": "0 0 auto",
		"padding": "0em",
		"background": "rgba(0, 0, 0, 0.05)"
	},
	".ui.cards > .card > .image > img,\n.ui.card > .image > img": {
		"display": "block",
		"width": "100%",
		"height": "auto",
		"borderRadius": "inherit"
	},
	".ui.cards > .card > .image:not(.ui) > img,\n.ui.card > .image:not(.ui) > img": {
		"border": "none"
	},
	".ui.cards > .card > .content,\n.ui.card > .content": {
		"WebkitBoxFlex": "1",
		"msFlexPositive": "1",
		"flexGrow": "1",
		"border": "none",
		"borderTop": "1px solid rgba(34, 36, 38, 0.1)",
		"background": "none",
		"margin": "0em",
		"padding": "1em 1em",
		"WebkitBoxShadow": "none",
		"boxShadow": "none",
		"fontSize": "1em",
		"borderRadius": "0em"
	},
	".ui.cards > .card > .content:after,\n.ui.card > .content:after": {
		"display": "block",
		"content": "' '",
		"height": "0px",
		"clear": "both",
		"overflow": "hidden",
		"visibility": "hidden"
	},
	".ui.cards > .card > .content > .header,\n.ui.card > .content > .header": {
		"display": "block",
		"margin": "''",
		"fontFamily": "'Lato', Arial, Helvetica, sans-serif",
		"color": "rgba(0, 0, 0, 0.85)"
	},
	".ui.cards > .card > .content > .header:not(.ui),\n.ui.card > .content > .header:not(.ui)": {
		"fontWeight": "bold",
		"fontSize": "1.28571429em",
		"marginTop": "-0.21425em",
		"lineHeight": "1.28571429em"
	},
	".ui.cards > .card > .content > .meta + .description,\n.ui.cards > .card > .content > .header + .description,\n.ui.card > .content > .meta + .description,\n.ui.card > .content > .header + .description": {
		"marginTop": "0.5em"
	},
	".ui.cards > .card [class*=\"left floated\"],\n.ui.card [class*=\"left floated\"]": {
		"cssFloat": "left"
	},
	".ui.cards > .card [class*=\"right floated\"],\n.ui.card [class*=\"right floated\"]": {
		"cssFloat": "right"
	},
	".ui.cards > .card [class*=\"left aligned\"],\n.ui.card [class*=\"left aligned\"]": {
		"textAlign": "left"
	},
	".ui.cards > .card [class*=\"center aligned\"],\n.ui.card [class*=\"center aligned\"]": {
		"textAlign": "center"
	},
	".ui.cards > .card [class*=\"right aligned\"],\n.ui.card [class*=\"right aligned\"]": {
		"textAlign": "right"
	},
	".ui.cards > .card .content img,\n.ui.card .content img": {
		"display": "inline-block",
		"verticalAlign": "middle",
		"width": "''"
	},
	".ui.cards > .card img.avatar,\n.ui.cards > .card .avatar img,\n.ui.card img.avatar,\n.ui.card .avatar img": {
		"width": "2em",
		"height": "2em",
		"borderRadius": "500rem"
	},
	".ui.cards > .card > .content > .description,\n.ui.card > .content > .description": {
		"clear": "both",
		"color": "rgba(0, 0, 0, 0.68)"
	},
	".ui.cards > .card > .content p,\n.ui.card > .content p": {
		"margin": "0em 0em 0.5em"
	},
	".ui.cards > .card > .content p:last-child,\n.ui.card > .content p:last-child": {
		"marginBottom": "0em"
	},
	".ui.cards > .card .meta,\n.ui.card .meta": {
		"fontSize": "1em",
		"color": "rgba(0, 0, 0, 0.4)"
	},
	".ui.cards > .card .meta *,\n.ui.card .meta *": {
		"marginRight": "0.3em"
	},
	".ui.cards > .card .meta :last-child,\n.ui.card .meta :last-child": {
		"marginRight": "0em"
	},
	".ui.cards > .card .meta [class*=\"right floated\"],\n.ui.card .meta [class*=\"right floated\"]": {
		"marginRight": "0em",
		"marginLeft": "0.3em"
	},
	".ui.cards > .card > .content a:not(.ui),\n.ui.card > .content a:not(.ui)": {
		"color": "''",
		"WebkitTransition": "color 0.1s ease",
		"transition": "color 0.1s ease"
	},
	".ui.cards > .card > .content a:not(.ui):hover,\n.ui.card > .content a:not(.ui):hover": {
		"color": "''"
	},
	".ui.cards > .card > .content > a.header,\n.ui.card > .content > a.header": {
		"color": "rgba(0, 0, 0, 0.85)"
	},
	".ui.cards > .card > .content > a.header:hover,\n.ui.card > .content > a.header:hover": {
		"color": "#1e70bf"
	},
	".ui.cards > .card .meta > a:not(.ui),\n.ui.card .meta > a:not(.ui)": {
		"color": "rgba(0, 0, 0, 0.4)"
	},
	".ui.cards > .card .meta > a:not(.ui):hover,\n.ui.card .meta > a:not(.ui):hover": {
		"color": "rgba(0, 0, 0, 0.87)"
	},
	".ui.cards > .card > .buttons,\n.ui.card > .buttons,\n.ui.cards > .card > .button,\n.ui.card > .button": {
		"margin": "0px -1px",
		"width": "calc(100% +  2px )"
	},
	".ui.cards > .card .dimmer,\n.ui.card .dimmer": {
		"backgroundColor": "''",
		"zIndex": "10"
	},
	".ui.cards > .card > .content .star.icon,\n.ui.card > .content .star.icon": {
		"cursor": "pointer",
		"opacity": "0.75",
		"WebkitTransition": "color 0.1s ease",
		"transition": "color 0.1s ease"
	},
	".ui.cards > .card > .content .star.icon:hover,\n.ui.card > .content .star.icon:hover": {
		"opacity": "1",
		"color": "#FFB70A"
	},
	".ui.cards > .card > .content .active.star.icon,\n.ui.card > .content .active.star.icon": {
		"color": "#FFE623"
	},
	".ui.cards > .card > .content .like.icon,\n.ui.card > .content .like.icon": {
		"cursor": "pointer",
		"opacity": "0.75",
		"WebkitTransition": "color 0.1s ease",
		"transition": "color 0.1s ease"
	},
	".ui.cards > .card > .content .like.icon:hover,\n.ui.card > .content .like.icon:hover": {
		"opacity": "1",
		"color": "#FF2733"
	},
	".ui.cards > .card > .content .active.like.icon,\n.ui.card > .content .active.like.icon": {
		"color": "#FF2733"
	},
	".ui.cards > .card > .extra,\n.ui.card > .extra": {
		"maxWidth": "100%",
		"minHeight": "0em !important",
		"WebkitBoxFlex": "0",
		"msFlexPositive": "0",
		"flexGrow": "0",
		"borderTop": "1px solid rgba(0, 0, 0, 0.05) !important",
		"position": "static",
		"background": "none",
		"width": "auto",
		"margin": "0em 0em",
		"padding": "0.75em 1em",
		"top": "0em",
		"left": "0em",
		"color": "rgba(0, 0, 0, 0.4)",
		"WebkitBoxShadow": "none",
		"boxShadow": "none",
		"WebkitTransition": "color 0.1s ease",
		"transition": "color 0.1s ease"
	},
	".ui.cards > .card > .extra a:not(.ui),\n.ui.card > .extra a:not(.ui)": {
		"color": "rgba(0, 0, 0, 0.4)"
	},
	".ui.cards > .card > .extra a:not(.ui):hover,\n.ui.card > .extra a:not(.ui):hover": {
		"color": "#1e70bf"
	},
	".ui.raised.cards > .card,\n.ui.raised.card": {
		"WebkitBoxShadow": [
			"0px 0px 0px 1px #D4D4D5, 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15)",
			"0px 0px 0px 1px #D4D4D5, 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15)"
		],
		"boxShadow": [
			"0px 0px 0px 1px #D4D4D5, 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15)",
			"0px 0px 0px 1px #D4D4D5, 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15)"
		]
	},
	".ui.raised.cards a.card:hover,\n.ui.link.cards .raised.card:hover,\na.ui.raised.card:hover,\n.ui.link.raised.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 4px 0px rgba(34, 36, 38, 0.15), 0px 2px 10px 0px rgba(34, 36, 38, 0.25)",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 4px 0px rgba(34, 36, 38, 0.15), 0px 2px 10px 0px rgba(34, 36, 38, 0.25)"
	},
	".ui.centered.cards": {
		"WebkitBoxPack": "center",
		"msFlexPack": "center",
		"justifyContent": "center"
	},
	".ui.centered.card": {
		"marginLeft": "auto",
		"marginRight": "auto"
	},
	".ui.fluid.card": {
		"width": "100%",
		"maxWidth": "9999px"
	},
	".ui.cards a.card,\n.ui.link.cards .card,\na.ui.card,\n.ui.link.card": {
		"WebkitTransform": "none",
		"transform": "none"
	},
	".ui.cards a.card:hover,\n.ui.link.cards .card:hover,\na.ui.card:hover,\n.ui.link.card:hover": {
		"cursor": "pointer",
		"zIndex": "5",
		"background": "#FFFFFF",
		"border": "none",
		"WebkitBoxShadow": "0px 1px 3px 0px #BCBDBD, 0px 0px 0px 1px #D4D4D5",
		"boxShadow": "0px 1px 3px 0px #BCBDBD, 0px 0px 0px 1px #D4D4D5",
		"WebkitTransform": "translateY(-3px)",
		"transform": "translateY(-3px)"
	},
	".ui.red.cards > .card,\n.ui.cards > .red.card,\n.ui.red.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #DB2828, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #DB2828, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.red.cards > .card:hover,\n.ui.cards > .red.card:hover,\n.ui.red.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #d01919, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #d01919, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.orange.cards > .card,\n.ui.cards > .orange.card,\n.ui.orange.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #F2711C, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #F2711C, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.orange.cards > .card:hover,\n.ui.cards > .orange.card:hover,\n.ui.orange.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #f26202, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #f26202, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.yellow.cards > .card,\n.ui.cards > .yellow.card,\n.ui.yellow.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #FBBD08, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #FBBD08, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.yellow.cards > .card:hover,\n.ui.cards > .yellow.card:hover,\n.ui.yellow.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #eaae00, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #eaae00, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.olive.cards > .card,\n.ui.cards > .olive.card,\n.ui.olive.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #B5CC18, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #B5CC18, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.olive.cards > .card:hover,\n.ui.cards > .olive.card:hover,\n.ui.olive.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #a7bd0d, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #a7bd0d, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.green.cards > .card,\n.ui.cards > .green.card,\n.ui.green.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #21BA45, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #21BA45, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.green.cards > .card:hover,\n.ui.cards > .green.card:hover,\n.ui.green.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #16ab39, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #16ab39, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.teal.cards > .card,\n.ui.cards > .teal.card,\n.ui.teal.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #00B5AD, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #00B5AD, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.teal.cards > .card:hover,\n.ui.cards > .teal.card:hover,\n.ui.teal.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #009c95, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #009c95, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.blue.cards > .card,\n.ui.cards > .blue.card,\n.ui.blue.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #2185D0, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #2185D0, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.blue.cards > .card:hover,\n.ui.cards > .blue.card:hover,\n.ui.blue.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #1678c2, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #1678c2, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.violet.cards > .card,\n.ui.cards > .violet.card,\n.ui.violet.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #6435C9, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #6435C9, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.violet.cards > .card:hover,\n.ui.cards > .violet.card:hover,\n.ui.violet.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #5829bb, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #5829bb, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.purple.cards > .card,\n.ui.cards > .purple.card,\n.ui.purple.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #A333C8, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #A333C8, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.purple.cards > .card:hover,\n.ui.cards > .purple.card:hover,\n.ui.purple.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #9627ba, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #9627ba, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.pink.cards > .card,\n.ui.cards > .pink.card,\n.ui.pink.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #E03997, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #E03997, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.pink.cards > .card:hover,\n.ui.cards > .pink.card:hover,\n.ui.pink.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #e61a8d, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #e61a8d, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.brown.cards > .card,\n.ui.cards > .brown.card,\n.ui.brown.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #A5673F, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #A5673F, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.brown.cards > .card:hover,\n.ui.cards > .brown.card:hover,\n.ui.brown.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #975b33, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #975b33, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.grey.cards > .card,\n.ui.cards > .grey.card,\n.ui.grey.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #767676, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #767676, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.grey.cards > .card:hover,\n.ui.cards > .grey.card:hover,\n.ui.grey.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #838383, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #838383, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.black.cards > .card,\n.ui.cards > .black.card,\n.ui.black.card": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #1B1C1D, 0px 1px 3px 0px #D4D4D5",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #1B1C1D, 0px 1px 3px 0px #D4D4D5"
	},
	".ui.black.cards > .card:hover,\n.ui.cards > .black.card:hover,\n.ui.black.card:hover": {
		"WebkitBoxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #27292a, 0px 1px 3px 0px #BCBDBD",
		"boxShadow": "0px 0px 0px 1px #D4D4D5, 0px 2px 0px 0px #27292a, 0px 1px 3px 0px #BCBDBD"
	},
	".ui.one.cards": {
		"marginLeft": "0em",
		"marginRight": "0em"
	},
	".ui.one.cards > .card": {
		"width": "100%"
	},
	".ui.two.cards": {
		"marginLeft": "-1em",
		"marginRight": "-1em"
	},
	".ui.two.cards > .card": {
		"width": "calc( 50%  -  2em )",
		"marginLeft": "1em",
		"marginRight": "1em"
	},
	".ui.three.cards": {
		"marginLeft": "-1em",
		"marginRight": "-1em"
	},
	".ui.three.cards > .card": {
		"width": "calc( 33.33333333%  -  2em )",
		"marginLeft": "1em",
		"marginRight": "1em"
	},
	".ui.four.cards": {
		"marginLeft": "-0.75em",
		"marginRight": "-0.75em"
	},
	".ui.four.cards > .card": {
		"width": "calc( 25%  -  1.5em )",
		"marginLeft": "0.75em",
		"marginRight": "0.75em"
	},
	".ui.five.cards": {
		"marginLeft": "-0.75em",
		"marginRight": "-0.75em"
	},
	".ui.five.cards > .card": {
		"width": "calc( 20%  -  1.5em )",
		"marginLeft": "0.75em",
		"marginRight": "0.75em"
	},
	".ui.six.cards": {
		"marginLeft": "-0.75em",
		"marginRight": "-0.75em"
	},
	".ui.six.cards > .card": {
		"width": "calc( 16.66666667%  -  1.5em )",
		"marginLeft": "0.75em",
		"marginRight": "0.75em"
	},
	".ui.seven.cards": {
		"marginLeft": "-0.5em",
		"marginRight": "-0.5em"
	},
	".ui.seven.cards > .card": {
		"width": "calc( 14.28571429%  -  1em )",
		"marginLeft": "0.5em",
		"marginRight": "0.5em"
	},
	".ui.eight.cards": {
		"marginLeft": "-0.5em",
		"marginRight": "-0.5em"
	},
	".ui.eight.cards > .card": {
		"width": "calc( 12.5%  -  1em )",
		"marginLeft": "0.5em",
		"marginRight": "0.5em",
		"fontSize": "11px"
	},
	".ui.nine.cards": {
		"marginLeft": "-0.5em",
		"marginRight": "-0.5em"
	},
	".ui.nine.cards > .card": {
		"width": "calc( 11.11111111%  -  1em )",
		"marginLeft": "0.5em",
		"marginRight": "0.5em",
		"fontSize": "10px"
	},
	".ui.ten.cards": {
		"marginLeft": "-0.5em",
		"marginRight": "-0.5em"
	},
	".ui.ten.cards > .card": {
		"width": "calc( 10%  -  1em )",
		"marginLeft": "0.5em",
		"marginRight": "0.5em"
	},
	"@media only screen and (max-width: 767px)": [
		{
			".ui.two.doubling.cards": {
				"marginLeft": "0em",
				"marginRight": "0em"
			},
			".ui.two.doubling.cards > .card": {
				"width": "100%",
				"marginLeft": "0em",
				"marginRight": "0em"
			},
			".ui.three.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.three.doubling.cards > .card": {
				"width": "calc( 50%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			},
			".ui.four.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.four.doubling.cards > .card": {
				"width": "calc( 50%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			},
			".ui.five.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.five.doubling.cards > .card": {
				"width": "calc( 50%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			},
			".ui.six.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.six.doubling.cards > .card": {
				"width": "calc( 50%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			},
			".ui.seven.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.seven.doubling.cards > .card": {
				"width": "calc( 33.33333333%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			},
			".ui.eight.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.eight.doubling.cards > .card": {
				"width": "calc( 33.33333333%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			},
			".ui.nine.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.nine.doubling.cards > .card": {
				"width": "calc( 33.33333333%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			},
			".ui.ten.doubling.cards": {
				"marginLeft": "-1em",
				"marginRight": "-1em"
			},
			".ui.ten.doubling.cards > .card": {
				"width": "calc( 33.33333333%  -  2em )",
				"marginLeft": "1em",
				"marginRight": "1em"
			}
		},
		{
			".ui.stackable.cards": {
				"display": "block !important"
			},
			".ui.stackable.cards .card:first-child": {
				"marginTop": "0em !important"
			},
			".ui.stackable.cards > .card": {
				"display": "block !important",
				"height": "auto !important",
				"margin": "1em 1em",
				"padding": "0 !important",
				"width": "calc( 100%  -  2em ) !important"
			}
		}
	],
	"@media only screen and (min-width: 768px) and (max-width: 991px)": {
		".ui.two.doubling.cards": {
			"marginLeft": "0em",
			"marginRight": "0em"
		},
		".ui.two.doubling.cards > .card": {
			"width": "100%",
			"marginLeft": "0em",
			"marginRight": "0em"
		},
		".ui.three.doubling.cards": {
			"marginLeft": "-1em",
			"marginRight": "-1em"
		},
		".ui.three.doubling.cards > .card": {
			"width": "calc( 50%  -  2em )",
			"marginLeft": "1em",
			"marginRight": "1em"
		},
		".ui.four.doubling.cards": {
			"marginLeft": "-1em",
			"marginRight": "-1em"
		},
		".ui.four.doubling.cards > .card": {
			"width": "calc( 50%  -  2em )",
			"marginLeft": "1em",
			"marginRight": "1em"
		},
		".ui.five.doubling.cards": {
			"marginLeft": "-1em",
			"marginRight": "-1em"
		},
		".ui.five.doubling.cards > .card": {
			"width": "calc( 33.33333333%  -  2em )",
			"marginLeft": "1em",
			"marginRight": "1em"
		},
		".ui.six.doubling.cards": {
			"marginLeft": "-1em",
			"marginRight": "-1em"
		},
		".ui.six.doubling.cards > .card": {
			"width": "calc( 33.33333333%  -  2em )",
			"marginLeft": "1em",
			"marginRight": "1em"
		},
		".ui.eight.doubling.cards": {
			"marginLeft": [
				"-1em",
				"-0.75em"
			],
			"marginRight": [
				"-1em",
				"-0.75em"
			]
		},
		".ui.eight.doubling.cards > .card": {
			"width": [
				"calc( 33.33333333%  -  2em )",
				"calc( 25%  -  1.5em )"
			],
			"marginLeft": [
				"1em",
				"0.75em"
			],
			"marginRight": [
				"1em",
				"0.75em"
			]
		},
		".ui.nine.doubling.cards": {
			"marginLeft": "-0.75em",
			"marginRight": "-0.75em"
		},
		".ui.nine.doubling.cards > .card": {
			"width": "calc( 25%  -  1.5em )",
			"marginLeft": "0.75em",
			"marginRight": "0.75em"
		},
		".ui.ten.doubling.cards": {
			"marginLeft": "-0.75em",
			"marginRight": "-0.75em"
		},
		".ui.ten.doubling.cards > .card": {
			"width": "calc( 20%  -  1.5em )",
			"marginLeft": "0.75em",
			"marginRight": "0.75em"
		}
	}
}