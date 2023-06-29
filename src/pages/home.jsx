import imageEquilibrium from "../assets/image-equilibrium.jpg";
import imageAvatar from "../assets/image-avatar.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100">
      <article className="grid p-5 min-h-screen place-items-center">
        <div className="card p-5 bg-[#14253d] shadow-xl">
          <figure href="#" className="relative mb-5">
            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fillRule="nonzero" />
              </g>
            </svg>
            <img className="rounded-xl" src={imageEquilibrium} alt="Shoes" />
          </figure>
          <div className="card-body p-0">
            <a href="#" className="card-title text-white active:text-c2">
              Equilibrium #3429
            </a>
            <p className="text-sm font-light mb-1">Our Equilibrium collection promotes balance and calm</p>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" />
                </svg>
                <span className="text-sm text-c2 font-extrabold">0.041 ETH</span>
              </div>
              <div className="flex gap-1 items-center">
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" />
                </svg>
                <span className="text-sm">3 days left</span>
              </div>
            </div>
            <div className="divider m-0"></div>
            <div className="flex items-center gap-3">
              <div className="avatar ">
                <div className="w-8 ring-1 ring-white rounded-full">
                  <img src={imageAvatar} alt="Avatar" />
                </div>
              </div>
              <span className="text-sm">
                Creation of
                <a href="#" className="text-white text-sm active:text-c2">
                  {" "}
                  Jules Wyvern
                </a>
              </span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
