

export default function AppButton({text="Button", color="blue", size="medium", onClick}) {

    return (
        <>
        
        {
            color === "blue" ?(

        <div
        onClick={onClick}
         className="cursor-pointer bg-light-blue outline outline-dark   w-44 flex justify-center p-1 drop-shadow-button  transition-all hover:translate-y-1.5 hover:translate-x-1.5 hover:drop-shadow-none">
        <h1 className=" font-body text-dark">{text}</h1>
        </div>
    )
            :(
            <div
            onClick={onClick}
             className="cursor-pointer bg-light-blue outline outline-sand  w-44 flex justify-center p-1 drop-shadow-sand  transition-all hover:translate-y-1.5 hover:translate-x-1.5 hover:drop-shadow-none">
            <h1 className=" font-body text-sand">{text}</h1>
            </div>

            )



                
                
        }
      

        </>
    );
    }
