function decorateWhatsAppLink() {
  //set up the url
  var url = 'whatsapp://send?text=';

  //define the message text
  var text = 'കോവിഡിന്റെ അപകട ലക്ഷണങ്ങൾ എങ്ങനെ സ്വന്തമായി തിരിച്ചറിയാം?%0a%0aഡോക്ടറുടെ ഈ വീഡിയോ തീർച്ചയായും കണ്ടിരിക്കണം%0a%0ahttps://bit.ly/Covid-19-Information';

  //encode the text
  var encodedText = encodeURIComponent(text);

  //find the link
  var $whatsApp = $('.whatsapp a');

  //set the href attribute on the link
  $whatsApp.attr('href', url + encodedText);
}

//call the decorator function
decorateWhatsAppLink()
