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
	'memory' : [
		//	Punctuation
			['–', '&ndash;'],
			['—', '&mdash;'],
			['¡', '&iexcl;'],
			['¿', '&iquest;'],
			['"', '&quot;'],
			['“', '&ldquo;'],
			['”', '&rdquo;'],
			['‘', '&lsquo;'],
			['’', '&rsquo;'],
			['«', '&laquo;'],
			['»', '&raquo;'],
		//	Symbols
			['&', '&amp;'],
			['¢', '&cent;'],
			['©', '&copy;'],
			['÷', '&divide;'],
			['>', '&gt;'],
			['<', '&lt;'],
			['µ', '&micro;'],
			['·', '&middot;'],
			['¶', '&para;'],
			['±', '&plusmn;'],
			['€', '&euro;'],
			['£', '&pound;'],
			['®', '&reg;'],
			['§', '&sect;'],
			['™', '&trade;'],
			['¥', '&yen;'],
		//	Diacritics
			['Á', '&Aacute;'],
			['À', '&Agrave;'],
			['Â', '&Acirc;'],
			['Å', '&Aring;'],
			['Ã', '&Atilde;'],
			['Ä', '&Auml;'],
			['Æ', '&Aelig;'],
			['Ç', '&Ccedil;'],
			['É', '&Eacute;'],
			['È', '&Egrave;'],
			['Ê', '&Ecirc;'],
			['Ë', '&Euml;'],
			['Í', '&Iacute;'],
			['Ì', '&Igrave;'],
			['Î', '&Icirc;'],
			['Ï', '&Iuml;'],
			['Ñ', '&Ntilde;'],
			['Ó', '&Oacute;'],
			['Ò', '&Ograve;'],
			['Ô', '&Ocirc;'],
			['Ø', '&Oslash;'],
			['Õ', '&Otilde;'],
			['Ö', '&Ouml;'],
			['Ú', '&Uacute;'],
			['Ù', '&Ugrave;'],
			['Û', '&Ucirc;'],
			['Ü', '&Uuml;'],
			['á', '&aacute;'],
			['à', '&agrave;'],
			['â', '&acirc;'],
			['å', '&aring;'],
			['ã', '&atilde;'],
			['ä', '&auml;'],
			['æ', '&aelig;'],
			['ç', '&ccedil;'],
			['é', '&eacute;'],
			['è', '&egrave;'],
			['ê', '&ecirc;'],
			['ë', '&euml;'],
			['í', '&iacute;'],
			['ì', '&igrave;'],
			['î', '&icirc;'],
			['ï', '&iuml;'],
			['ñ', '&ntilde;'],
			['ó', '&oacute;'],
			['ò', '&ograve;'],
			['ô', '&ocirc;'],
			['ø', '&oslash;'],
			['õ', '&otilde;'],
			['ö', '&ouml;'],
			['ß', '&szlig;'],
			['ú', '&uacute;'],
			['ù', '&ugrave;'],
			['û', '&ucirc;'],
			['ü', '&uuml;'],
			['ÿ', '&yuml;'],
	],
//Functions
//	Replace
	'hunt' : function(bait){
	alert(dog.memory.length);
		for(i=0;i<dog.memory.length;i+=1){
				//alert("I have " + bait + " and I'm looking for " + dog.memory[i][j] + " see: " + i + ", " + j);
				var eyes = new RegExp(dog.memory[i][0], "g");
				if(eyes.exec(bait)){
					alert("I have " + bait + " and I'm looking for " + dog.memory[i][0] + " with " + eyes);
				}
						
		}
		alert("done");
	}
};






  	

 