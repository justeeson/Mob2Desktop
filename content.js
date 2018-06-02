/**
 * @author Sebastin Justeeson
 */

// Obtain URL and check if it is a mobile link
var url = window.location.href;
var mobLinkTest = false;
if(url.includes("//m.") || url.includes(".m.")){
	mobLinkTest = true;
}

// If the link is a mobile link, replace it with a desktop link
if(mobLinkTest){
	if(url.includes("//m.")){
		url = url.replace('m.', '');
	}
	else if(url.includes(".m.")){
		url = url.replace('.m.', '.');
	}
	window.location.href = url;
}
