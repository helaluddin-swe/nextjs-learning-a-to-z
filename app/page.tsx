import style from "@/app/ui/home.module.css"
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className={style.shape} />
      <h1 className="text-2xl text-blue-700">hello everyone.</h1>
      <p>how are you all?</p>
      <p>hope,you are you all fit and fine</p>
    </div>
  )
}
export default Home