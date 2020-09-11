const sentenceTag = document.querySelector(`input[type=text]`);

const typesizeTag = document.querySelector(`input[name=typesize]`);
const typesizeOutput = document.querySelector('span.typesize-output');

const lineheightTag = document.querySelector(`input[name=lineheight]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector('input[name=italic]');

const typefaceTag = document.querySelector(`select[name="typeface"]`);

const fontweightTag = document.querySelector(`input[name="fontweight"]`);
const fontweightOutput = document.querySelector("span.fontweight-output");

const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// when I type in my sentence tag, update the output tag
sentenceTag.addEventListener("keyup", function(){
  if (this.value) {
    outputTag.value = this.value;
  } else {
    outputTag.value = originalText;
    // if there is no text in the output, put the original text back
    }
});

// when I type in my outputTag, update the sentence tag
outputTag.addEventListener("keyup", function (){
  sentenceTag.value = this.value;
})

// when i change my type size slide, update the text next to it and change the outputTag's font size
typesizeTag.addEventListener("input", function(){
  outputTag.style.fontSize = this.value + "px";
  typesizeOutput.innerHTML = this.value + "px";
})

fontweightTag.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

// when I slide the range change line height accordingly
lineheightTag.addEventListener("input", function(){
  outputTag.style.lineHeight = this.value;
  lineheightOutput.innerHTML = this.value;
})

// when i click checkbox, update font style
italicTag.addEventListener("change", function(){
  if (this.checked) {
    outputTag.style.fontStyle = "italic";
  } else {
    outputTag.style.fontStyle = "normal";
  }
})

// when i change my select for typeface, update the font family
typefaceTag.addEventListener("input", function(){
  outputTag.style.fontFamily = this.value;
})



