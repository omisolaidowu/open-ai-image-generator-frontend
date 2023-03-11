import getData from "../fetch-data/fetch.data"
import downloadImage from "../handles/downloadhandler"

import handlesubmit from "../handles/submithandler"

import {useRef, useState, useEffect} from 'react'
import { saveAs } from 'file-saver'


function Generateimage(){
    const promptRef = useRef()

    const imageNumRef = useRef()

    const imageSizeRef = useRef()

    const [statusMessage, setstatusMessage] = useState("")

    const [imageURI, setimageURI] = useState([])

    const [isLoading, setisLoading] = useState(false)

    const [isImage, setisImage] = useState(false)

    const [imageSizes] = useState(["256x256", "512x512", "1024x1024"])

    useEffect(() => {

        
        
      }, []);


    const handlePromptSubmit = async (e)=>{

        setisImage(false)

        e.preventDefault()
        setisLoading(true)
        console.log(imageSizeRef.current.value)

        try{

  const imageURL = await getData(
        promptRef.current.value, 
        imageNumRef.current.value, 
        imageSizeRef.current.value,
        )

        setisLoading(false)
        setisImage(true)

        const URL = JSON.parse(imageURL)["URL"]

        const message = JSON.parse(imageURL)["message"]

        setstatusMessage(message)

        

        setimageURI(URL)

        }catch(error){

            setisImage(false)
            
            
            console.error(error)
            console.log(statusMessage)
        }
        

        }

        const downloadImage = (url) => {

            try{
           
            saveAs(url, "Generated_Image")
            }catch(err){console.error(err)}
            
        }
        
    return(
        <div>
            <form onSubmit={ handlePromptSubmit }>
                <p>Image Prompt: <input className="prompt" type="text" ref={promptRef} required/></p>
                <p>Number of images: <input type="text" ref={imageNumRef} required/></p>
                <p>
                    Image size: 
                    <select key={"Idowu"} defaultValue={'DEFAULT'} 
                    className="size-selector" ref={imageSizeRef} required>
                        <option value="DEFAULT" disabled>--Select an image size-- </option>
                        {imageSizes.map((sizes, index)=> <option key={index}>{sizes}</option>)}
                    
                    </select>
                </p>
                <p>{!isLoading? <input type="submit" value="Generate"/>: 
                <input disabled type="submit" value="Generate"/>}
                </p>
            </form>



            <div>{isLoading? <div className="spin"></div> :

            statusMessage ==="Error generating images"?
            <div className="error-message">{statusMessage}</div>:

            isImage? imageURI.map((ImageURLs, index) =>
            <span key={index}>
            
            
            <img src={ImageURLs} key={index.toString()} alt="generated-" className="images"/>
            <button key={index + 1} className="download-button" onClick={() => downloadImage(ImageURLs)}>
                Download
            </button>
            
            </span>): ""           
            }
            </div>

            
        </div>
    )

}

export default Generateimage