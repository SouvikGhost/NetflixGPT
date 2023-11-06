
const VideoTitle = ({title , description}) => {
  return (
    <div className="absolute text-white bg-gradient-to-r from-black aspect-video pt-[20%] px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{description}</p>
      <div className="">
      <button className="bg-white text-black p-3 px-10 text-xl rounded-lg font-semibold hover:bg-opacity-80">Play</button>
      <button className="bg-gray-500 mx-4 text-white p-3 px-8 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-30">ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
