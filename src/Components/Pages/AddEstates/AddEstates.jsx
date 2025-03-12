import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    images: [],
    estate_title: '',
    segment_name: '',
    description: '',
    price: '',
    status: 'sale',
    area: '',
    location: '',
    latitude: '',
    longitude: '',
    facilities: []
  })

  const [newFacility, setNewFacility] = useState('')
  const [previewImages, setPreviewImages] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    
    // Create preview URLs for the images
    const newPreviewImages = files.map(file => URL.createObjectURL(file))
    setPreviewImages([...previewImages, ...newPreviewImages])
    
    // Store the actual files in the form data
    setFormData({
      ...formData,
      images: [...formData.images, ...files]
    })
  }

  const removeImage = (index) => {
    const updatedPreviewImages = [...previewImages]
    const updatedImages = [...formData.images]
    
    // Release the object URL to avoid memory leaks
    URL.revokeObjectURL(previewImages[index])
    
    updatedPreviewImages.splice(index, 1)
    updatedImages.splice(index, 1)
    
    setPreviewImages(updatedPreviewImages)
    setFormData({
      ...formData,
      images: updatedImages
    })
  }

  const addFacility = () => {
    if (newFacility.trim() !== '') {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, newFacility.trim()]
      })
      setNewFacility('')
    }
  }

  const removeFacility = (index) => {
    const updatedFacilities = [...formData.facilities]
    updatedFacilities.splice(index, 1)
    setFormData({
      ...formData,
      facilities: updatedFacilities
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
    setFormSubmitted(true)
    
    // In a real application, you would send this data to a server
    // For example using fetch or axios
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Real Estate Property Form</h1>
          
          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">Form Submitted Successfully!</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 overflow-auto max-h-96 text-left">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(formData, (key, value) => {
                    // Don't include the actual image files in the output
                    if (key === 'images') {
                      return `${value.length} images uploaded`;
                    }
                    return value;
                  }, 2)}
                </pre>
              </div>
              <button 
                onClick={() => {
                  setFormData({
                    images: [],
                    estate_title: '',
                    segment_name: '',
                    description: '',
                    price: '',
                    status: 'sale',
                    area: '',
                    location: '',
                    latitude: '',
                    longitude: '',
                    facilities: []
                  });
                  setPreviewImages([]);
                  setFormSubmitted(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                Add Another Property
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Images:</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input 
                      type="file" 
                      accept="image/*" 
                      multiple 
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
                
                {previewImages.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                    {previewImages.map((src, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={src} 
                          alt={`Preview ${index}`} 
                          className="h-24 w-full object-cover rounded-lg"
                        />
                        <button 
                          type="button" 
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-70 group-hover:opacity-100"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="estate_title" className="block text-sm font-medium text-gray-700 mb-1">
                    Estate Title:
                  </label>
                  <input
                    type="text"
                    id="estate_title"
                    name="estate_title"
                    value={formData.estate_title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="segment_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Segment Name:
                  </label>
                  <input
                    type="text"
                    id="segment_name"
                    name="segment_name"
                    value={formData.segment_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      required
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status:</label>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        id="status-sale"
                        type="radio"
                        name="status"
                        value="sale"
                        checked={formData.status === 'sale'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="status-sale" className="ml-2 block text-sm text-gray-700">
                        For Sale
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="status-rent"
                        type="radio"
                        name="status"
                        value="rent"
                        checked={formData.status === 'rent'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="status-rent" className="ml-2 block text-sm text-gray-700">
                        For Rent
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                    Area:
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 1500 sq ft"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location:
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 123 Main St, City, State"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-1">
                    Latitude:
                  </label>
                  <input
                    type="number"
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleInputChange}
                    step="0.000001"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 40.7128"
                  />
                </div>

                <div>
                  <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-1">
                    Longitude:
                  </label>
                  <input
                    type="number"
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleInputChange}
                    step="0.000001"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., -74.0060"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Facilities:
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newFacility}
                    onChange={(e) => setNewFacility(e.target.value)}
                    placeholder="Add a facility (e.g., Swimming Pool)"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addFacility();
                      }
                    }}
                  />
                  <button 
                    type="button" 
                    onClick={addFacility}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Add
                  </button>
                </div>
                
                {formData.facilities.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.facilities.map((facility, index) => (
                      <div key={index} className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        <span>{facility}</span>
                        <button 
                          type="button" 
                          onClick={() => removeFacility(index)}
                          className="ml-1 text-blue-500 hover:text-blue-700 focus:outline-none"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Property
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default App