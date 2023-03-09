import astrolabLogo from '../assets/astrolab_logo.png';
import satangLogo from '../assets/satang_logo.png';
import ccosLogo from '../assets/ccos_logo.png';

export default function Partner () {
  return (
    <div className="mx-auto p-5 flex flex-wrap gap-10 justify-center items-center">
      <img src={astrolabLogo} className="s-logo opacity-30 h-16 mt-10" />
      <img src={ccosLogo} className="s-logo opacity-30 h-16" />
      <img src={satangLogo} className="s-logo opacity-30 h-10" />
    </div>
  )
}