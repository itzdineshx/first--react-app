export default function Home()
{
    function print()
    {
        console.log("Button Clicked")
    }

    return (
        <>
            <div className="Home">
                
                <h1>Home Page</h1>

                <button onClick={print}>

                    Im the Button
                    
                </button>
                
            </div>
            
        </>
    )
}