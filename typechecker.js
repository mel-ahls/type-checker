const sentenceTag = document.querySelector(`input[type=text]`);

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

