const HtmlNavbar = () => {
  return (
    // make navbar
    <div className="bg-blue-300 h-12 w-full px-22">
      {/*  create list of navbar elements with html tags */}
      <div className="flex gap-4 justify-between px-4 py-2"> 
      <h2>ENGLISHFlency</h2>
      <ul className="flex gap-4 ">
        <li><a href="#home"> Home</a></li>
        <li><a href="#basic"> Basic</a></li>
        <li><a href="#medium"> Medium</a></li>
        <li><a href="#advanced"> Advanced</a></li>
        <li><a href="#blog"> Blog</a></li>
      </ul>
      </div>
      {/* add anchor tage also for navigATION */}
    </div>
  )
}
export default HtmlNavbar