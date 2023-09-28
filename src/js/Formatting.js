function Formatting(text) {
    let ArrayNoRepete = [];
    let textSeparate = text.split('-');

    let ArrayBrute = textSeparate.filter(function (el, i) {
        return textSeparate.indexOf(el) === i;
    });

    ArrayBrute.forEach(el => {
        let sentenceClean = el.trim();
        ArrayNoRepete.push(sentenceClean);
    });

    let ArrayList = ArrayNoRepete.filter(function (i) {
        return i;
    });

    return ArrayList;
}

export default Formatting;