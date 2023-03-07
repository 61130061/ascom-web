import patcharinImg from '../assets/patcharin.png';
import peerapongImg from '../assets/peerapong.jpg';
import thaweerathImg from '../assets/thaweerath.jpg';
import tanatthepImg from '../assets/tanatthep.jpg';
import warunyuImg from '../assets/warunyu.jpg';

export default function Team () {
  const contents = [
    {
      name: "Patcharin Kamsing, Ph.D",
      role: "Founder & Head of Laboratory",
      img: patcharinImg
    },
    {
      name: "Peerapong Torteeka, Ph.D",
      role: "Guest researcher",
      img: peerapongImg
    },
    {
      name: "Thaweerath Phisannupawong",
      role: "Guest researcher",
      img: thaweerathImg
    },
    {
      name: "Warunyu Hematulin",
      role: "Guest researcher",
      img: warunyuImg
    },
    {
      name: "Tanatthep Jarawan",
      role: "Guest researcher",
      img: tanatthepImg
    },
  ]

  const forceScroll = (right) => {
    document.getElementById('team-slider').scrollBy({ 
      left: right ? -40 : 40,
      behavior: 'smooth'
    });
  }

  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="uppercase text-sm font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-yellow-500">The team</div>
            <h1 className="text-4xl font-semibold">Meet Our Researchers</h1>
          </div>
          <div className="flex items-center gap-5">
            <button className="w-9 aspect-square rounded-lg bg-white bg-opacity-20" onClick={() => forceScroll(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-9 aspect-square rounded-lg bg-white bg-opacity-20" onClick={() => forceScroll()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="team-slider" className="hide-scrollbar flex overflow-x-scroll snap-mandatory snap-x">
        {[...contents, ...contents].map((d, i) =>
          <div className="snap-start px-5 mb-5">
            <img className="mb-5 rounded-lg min-w-[300px]" src={d.img} />
            <h2 className="font-bold mb-1">{d.name}</h2>
            <div className="text-sm text-gray-300">{d.role}</div>
          </div>
        )}
      </div>
    </div>
  )
}