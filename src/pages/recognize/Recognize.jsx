import { useState, useEffect } from "react"
import "./recognize.style.css"
import axios from "axios"

import moneyDatabase from "./MoneyDatabase"

export default function Recognize() {
  const [imagePreview, setImagePreview] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [results, setResults] = useState({})
  const [descriptionResults, setDescriptionResults] = useState({})
  const [isScanning, setIsScanning] = useState(false)

  useEffect(() => {
    if (Object.keys(results).length !== 0 && moneyDatabase.length !== 0) {
      for (let i = 0; i < moneyDatabase.length; i++) {
        if (results.detected_object_name === moneyDatabase[i].codename) {
          setDescriptionResults(moneyDatabase[i])
          break
        }
      }
    }
  }, [results, moneyDatabase])

  const handleImageChange = e => {
    const file = e.target.files[0]
    setSelectedImage(e.target.files[0])

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const recognizeImage = e => {
    e.preventDefault()

    const data = new FormData()
    data.append("image", selectedImage)

    axios
      .post("https://currency-trace-backend.onrender.com/upload", data)
      .then(response => {
        setIsScanning(true) // Start the animation
        setTimeout(() => {
          setIsScanning(false)
          setResults(response.data.results)
        }, 2000)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="recognize-container">
      <form
        onSubmit={recognizeImage}
        encType="multipart/form-data"
        className="image-form-container"
      >
        <label htmlFor="image">Preview:</label>
        <div className="image">
          <div className="image-preview">
            {imagePreview && (
              <>
                <img
                  src={imagePreview}
                  alt="Selected"
                  style={{
                    maxWidth: "400px",
                    maxHeight: "300px",
                    objectFit: "contain",
                  }}
                />
                {isScanning && <div className="scan-line"></div>}
              </>
            )}
          </div>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
          />
        </div>

        <button type="submit" className="submit-button">
          Recognize Image
        </button>
      </form>

      {Object.keys(results).length > 0 && (
        <div className="results-container">
          <h2>Results:</h2>

          <div className="image-results">
            <div className="details-results">
              <p>{results.detected_object_name}:</p>
              <p>{results.detected_object_confidence}%</p>
            </div>
            <div className="images">
              <img src={descriptionResults.obverse} alt="Obverse Money" />
              <img src={descriptionResults.reverse} alt="Reverse Money" />
            </div>
          </div>

          <div className="description-results">
            <p>{descriptionResults.moneyDescription}</p>
            <br />
            <br />

            <div className="conversion-container">
              <h3>Conversion to other currencies:</h3>
              <p>{descriptionResults.conversion1}</p>
              <p>{descriptionResults.conversion2}</p>
              <p>{descriptionResults.conversion3}</p>
              <p>{descriptionResults.conversion4}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
