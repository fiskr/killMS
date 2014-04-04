/*
 * Author: Brandon Foster
 * Date: March 21, 2014
 * Purpose: Kill Microsoft Word Document special characters that don't render properly in HTML pages
 */
 
 

/*
 * TO DO:
 * 		replace   with &reg;
 *				— with &mdash;
 */

var dog = {
//	Punctuation
	'–' : '&ndash;',
	'—' : '&mdash;',
	'¡' : '&iexcl;',
	'¿' : '&iquest;',
	'"' : '&quot;',
	'“' : '&ldquo;',
	'”' : '&rdquo;',
	'‘' : '&lsquo;',
	'’' : '&rsquo;',
	'«' : '&laquo;',
	'»' : '&raquo;',
//	Symbols
	'&' : '&amp;',
	'¢' : '&cent;',
	'©' : '&copy;',
	'÷' : '&divide;',
	'>' : '&gt;',
	'<' : '&lt;',
	'µ' : '&micro;',
	'·' : '&middot;',
	'¶' : '&para;',
	'±' : '&plusmn;',
	'€' : '&euro;',
	'£' : '&pound;',
	'®' : '&reg;',
	'§' : '&sect;',
	'™' : '&trade;',
	'¥' : '&yen;',
//	Diacritics
	'Á' : '&Aacute;',
	'À' : '&Agrave;',
	'Â' : '&Acirc;',
	'Å' : '&Aring;',
	'Ã' : '&Atilde;',
	'Ä' : '&Auml;',
	'Æ' : '&Aelig;',
	'Ç' : '&Ccedil;',
	'É' : '&Eacute;',
	'È' : '&Egrave;',
	'Ê' : '&Ecirc;',
	'Ë' : '&Euml;',
	'Í' : '&Iacute;',
	'Ì' : '&Igrave;',
	'Î' : '&Icirc;',
	'Ï' : '&Iuml;',
	'Ñ' : '&Ntilde;',
	'Ó' : '&Oacute;',
	'Ò' : '&Ograve;',
	'Ô' : '&Ocirc;',
	'Ø' : '&Oslash;',
	'Õ' : '&Otilde;',
	'Ö' : '&Ouml;',
	'Ú' : '&Uacute;',
	'Ù' : '&Ugrave;',
	'Û' : '&Ucirc;',
	'Ü' : '&Uuml;',
	'á' : '&aacute;',
	'à' : '&agrave;',
	'â' : '&acirc;',
	'å' : '&aring;',
	'ã' : '&atilde;',
	'ä' : '&auml;',
	'æ' : '&aelig;',
	'ç' : '&ccedil;',
	'é' : '&eacute;',
	'è' : '&egrave;',
	'ê' : '&ecirc;',
	'ë' : '&euml;',
	'í' : '&iacute;',
	'ì' : '&igrave;',
	'î' : '&icirc;',
	'ï' : '&iuml;',
	'ñ' : '&ntilde;',
	'ó' : '&oacute;',
	'ò' : '&ograve;',
	'ô' : '&ocirc;',
	'ø' : '&oslash;',
	'õ' : '&otilde;',
	'ö' : '&ouml;',
	'ß' : '&szlig;',
	'ú' : '&uacute;',
	'ù' : '&ugrave;',
	'û' : '&ucirc;',
	'ü' : '&uuml;',
	'ÿ' : '&yuml;',
//Functions
//	Replace
	'hunt' : function(bait){
	alert(dog.length + " " + 1 + " " + dog[1]);
		//for(i=0;i<dog.length;i+=1){
		//	alert(dog.length + " " + i + " " + dog[i]);
		//	//alert("I have " + bait + " and I'm looking for " + dog[i]);
		//	//if(typeof dog[i] !== 'function'){
		//	//	dog.eyes = new RegExp("/"+dog[i]+"/g");
		//	//	alert("I have " + bait + " and I'm looking for " + dog[i]);
		//	//}
		//}
	}
};






  	

 