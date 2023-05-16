import Layout from "../layout";

const thumb = [
  {
    path : "/thumb/0.jpg"
  },
  {
    path : "/thumb/1.jpg"
  },
  {
    path : "/thumb/2.jpg"
  },
  {
    path : "/thumb/3.jpg"
  },
  {
    path : "/thumb/4.jpg"
  },
  {
    path : "/thumb/5.jpg"
  },
  {
    path : "/thumb/6.jpg"
  },
  {
    path : "/thumb/7.jpg"
  },
  {
    path : "/thumb/8.jpg"
  },
  {
    path : "/thumb/9.jpg"
  },
  {
    path : "/thumb/10.jpg"
  },
  {
    path : "/thumb/11.jpg"
  }
]

const Home = ()=>{
  return (
    <>
      <Layout>
        <div className="grid md:grid-cols-4 gap-5">
          {
            thumb.map((item, index)=>(
              <div className="flex flex-col gap-y-4" key={index}>
                <img src={item.path} className="rounded-lg" />
                <div className="flex gap-x-4">
                  <img 
                    src="https://yt3.googleusercontent.com/_FmN-rgQ1Wkp9j9xDBbcPHCq5p7pSutDh_QP-CfOz8LPTrYhnWHmDoucvtz7BXy34wsdVu5uZA4=s176-c-k-c0x00ffffff-no-rj" 
                    className="rounded-full w-10 h-10" 
                  />
                  <div>
                    <h1 className="text-sm font-semibold mb-3">'Pabiben.com' की Female Founder की Tragic Story ने किया Sharks को Shock! l Shark Tank Indial Pitches</h1>
                    <div className="flex items-center gap-x-2 mb-1">
                      <p className="text-xs text-slate-500">Set india</p>
                      <span className="material-icons" style={{fontSize: 16}}>check_circle</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-xs text-slate-500">
                      <p>10k View</p>
                      <p>1 Day Ago</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Layout>
    </>
  );
}
export default Home;