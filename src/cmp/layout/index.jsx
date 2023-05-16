import {
  useState
} from "react";

const menus = [
  {
    label: "home",
    icon: "home"
  },
  {
    label: "shorts",
    icon: "movie_filter"
  },
  {
    label: "subscription",
    icon: "subscriptions"
  },
  {
    label: "music",
    icon: "headphones"
  },
  {
    label: "home",
    icon: "home"
  },
  {
    label: "shorts",
    icon: "movie_filter"
  },
  {
    label: "subcription",
    icon: "subscriptions"
  },
  {
    label: "music",
    icon: "headphones"
  }
]

const Layout = ({children})=>{
  const [open, setOpen] = useState(true);
  return (
    <div>
      <nav 
        className="
          fixed 
          w-full 
          h-16 
          left-0 
          top-0 
          z-10 
          px-5
          border-b 
          flex 
          items-center
          justify-between
      ">
        <div className="flex items-center gap-x-3">
          <button className="w-10 h-10 rounded-full hover:bg-gray-200 flex items-center justify-center" onClick={()=>setOpen(!open)}>
            <span className="material-icons">menu</span>
          </button>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="logo" 
            className="w-16" 
          />
        </div>  
        
        <div className="w-1/2 flex flex-col">
          <form className="flex">
            <input className="border border-slate-300 focus:outline-none focus:border-blue-500 rounded-l-full h-10 flex-1 px-10" placeholder="Search" />
            <button className="border border-slate-300 rounded-r-full text-slate-400 border-l-0 h-10 flex items-center justify-center w-16">
              <span className="material-icons-outlined">search</span>
            </button>
          </form>
        </div>  


        <div className="flex items-center gap-x-3">
          <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <span className="material-icons-outlined">video_call</span>
          </button>

          <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <span className="material-icons-outlined">notifications</span>
          </button>
          
          <img 
            src="https://yt3.googleusercontent.com/ytc/AGIKgqNrMBQ3v6S73Al4I-pGpOLMlQ_uWnH-WNCbIiTfEA=s176-c-k-c0x00ffffff-no-rj-mo"
            alt="profile" 
            className="w-8 rounded-full"
          />
        </div>  

      </nav>
      <aside 
        className={`
          h-full 
          fixed 
          left-0 
          top-0 
          mt-16 
          border-r 
          flex
          flex-col
          p-3 
          gap-y-3 
          overflow-auto
        `}
        style={{
          width: open ? 250 : 70,
          transition: "0.2s"
        }}
      >
        {
          menus.map((item, index)=>(
            <>
              <button className={`
                flex ${open ? "flex-row items-start" : "flex-col items-center"} gap-x-5 rounded-lg text-slate-700 capitalize p-2 hover:bg-gray-200
              `} key={index}>
                <span className="material-icons-outlined">{item.icon}</span>
                <label className={`${open ? null : "text-xs"}`}>{
                  open ? item.label : item.label.slice(0, 5)
                }</label>
              </button>
            </>
          ))
        }
      </aside>
      <section className=" 
        mt-16 
        p-4 
        overflow-hidden
      "
        style={{
          marginLeft: open ? 250 : 70,
          transition: "0.2s"
        }}
      >
        {
          children
        }
      </section>
    </div>
  );
}
export default Layout;