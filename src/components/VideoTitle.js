
const VideoTitle = ({title , description}) => {
  return (
    <div className="absolute text-white bg-gradient-to-r from-black aspect-video pt-[15%] px-6 md:px-12">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md opacity-60 w-1/3">{description}</p>
      <div className="my-4 md:m-0">
      <button className="bg-white text-black p-1 md:p-3 px-4 md:px-10 text-xl rounded-lg font-semibold hover:bg-opacity-80">Play</button>
      <button className="bg-gray-500 mx-4 text-white p-3 px-8 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-30 hidden md:inline-block m">ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
