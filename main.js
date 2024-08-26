
function App(){
    const ageCal = () => new Date().getFullYear() - 1995
    const sty1 = {color:'red',backgroundColor:'green'}
    const sty2 = {color:'blue',backgroundColor:'deeppink'}

    return (
        <div>
            <p>LAB 01</p>
        <h1 style={sty1}>Name : Thanaphon Teenimith</h1>
        <p style={sty2}>age ={ageCal()}</p>
        
        </div>
    )




}









ReactDOM.createRoot(document.querySelector('.root'))
.render(<App/>)