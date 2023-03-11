
  const download = (filename, textInput) =>{

              var element = document.createElement('a');
              element.setAttribute('href', textInput);
              element.setAttribute('download', filename);
              document.body.appendChild(element);
             element.click();
        }

const downloadImage =(url)=>{
    var text = url; 
    
    var filename = "output.png";
    download(filename, text);
                }

export default downloadImage