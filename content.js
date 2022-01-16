var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/a|a/gi,'ᜀ').replace(/b|B/gi,'ᜊ᜔').replace(/c|C/gi,'ᜃ᜔').replace(/d|D/gi,'ᜇ᜔')
            .replace(/e|E/gi,'ᜁ').replace(/f|F/gi,'ᜉ᜔').replace(/g|G/gi,'ᜄ᜔').replace(/h|H/gi,'ᜑ᜔').replace(/i|I/gi,'ᜁ').replace(/j|J/gi,'ᜑ')
            .replace(/k|K/gi,'ᜃ᜔').replace(/l|L/gi,'ᜎ᜔').replace(/m|M/gi,'ᜋ᜔').replace(/n|N/gi,'ᜈ᜔').replace(/o|O/gi,'ᜅ').replace(/p|P/gi,'ᜉ᜔')
            .replace(/q|Q/gi,'ᜃ').replace(/r|R/gi,'ᜇ').replace(/s|S/gi,'ᜐ᜔').replace(/t|T/gi,'ᜆ᜔').replace(/u|U/gi,'ᜂ').replace(/v|V/gi,'ᜓᜊ᜔')
            .replace(/w|W/gi,'ᜏ᜔').replace(/x|X/gi,'ᜎ').replace(/y|Y/gi,'ᜌ᜔').replace(/z|Z/gi,'ᜐ');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}