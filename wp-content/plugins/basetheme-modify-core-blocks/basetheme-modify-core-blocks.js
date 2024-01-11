/**
 * Remove squared button
 */
/*wp.domReady(function() {
	wp.blocks.unregisterBlockStyle("core/button", "squared");
});*/

/**
 * Add list style.
 */
/*wp.blocks.registerBlockStyle("core/list", {
	name: "checkmarks",
	label: "Checkmarks"
});*/

/**
 * Unregister / Register separator styles example.
 */
wp.domReady(function() {
	wp.blocks.unregisterBlockStyle("core/separator", "dots");
	wp.blocks.unregisterBlockStyle("core/separator", "wide");
});

wp.blocks.registerBlockStyle("core/separator", {
	name: "transparent",
	label: "Transparent"
});

/**
 * Add containers to group block
 */
wp.blocks.registerBlockStyle("core/group", {
	name: "container",
	label: "Container"
});
wp.blocks.registerBlockStyle("core/group", {
	name: "container-narrow",
	label: "Container (Narrow)"
});
wp.blocks.registerBlockStyle("core/group", {
	name: "container-wide",
	label: "Container (Wide)"
});

/**
 * Add heading styles.
 */
wp.blocks.registerBlockStyle("core/heading", {
	name: "h1",
	label: "H1 style"
});
wp.blocks.registerBlockStyle("core/heading", {
	name: "h2",
	label: "H2 style"
});
wp.blocks.registerBlockStyle("core/heading", {
	name: "h3",
	label: "H3 style"
});
wp.blocks.registerBlockStyle("core/heading", {
	name: "h4",
	label: "H4 style"
});
wp.blocks.registerBlockStyle("core/heading", {
	name: "h5",
	label: "H5 style"
});
wp.blocks.registerBlockStyle("core/heading", {
	name: "h6",
	label: "H6 style"
});
